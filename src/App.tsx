import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValid } from "./validation/ProductValidtion";
import ErrorMessage from "./validation/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    errorColor: "",
    colorList: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /*______STATE_______*/
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errorState, setErrorState] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    errorColor: "",
  });

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /*______RENDERS_______*/
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  /*______HANDLER_______*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrorState({
      ...errorState,
      [name]: "",
    });
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price, errorColor } = product;
    const errors = productValid({
      title,
      description,
      imageURL,
      price,
      errorColor,
    });

    const hasErrorsMsg = Object.values(errors).some((val) => val !== "");

    if (hasErrorsMsg) {
      setErrorState(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colorList: tempColor,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setTempColor([]);
    onCancel();
  };

  const renderFormInput = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        className="mb-1 text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errorState[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor(tempColor.filter((item) => item !== color));
          return;
        }

        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  const tempColors = tempColor.map((color) => (
    <span
      key={color}
      className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
      style={{ background: color }}
    >
      {color}
    </span>
  ));

  return (
    <main className="container">
      <Button
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
        onClick={openModal}
        width="w-fit"
      >
        Build Product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInput}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          <div className="flex items-center flex-wrap my-4 space-x-1">
            {renderProductColors}
          </div>









          <div className="flex items-center flex-wrap my-4 space-x-1">
            {tempColors}
            <span>
              <ErrorMessage msg={errorState.errorColor} />
            </span>
          </div>

















          <div className="flex items-center space-x-3 my-2">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
