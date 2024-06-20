import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValid } from "./validation/ProductValidtion";
import ErrorMessage from "./validation/ErrorMessage";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /*______STATE_______*/
  const [isOpen, setIsOpen] = useState(false);
  const [errorState, setErrorState] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    assm: "",
  });
  console.log("errors", errorState);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  /*______HANDKER_______*/
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
    })
  };
  /*______RENDERS_______*/

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValid({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorsMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");
    console.log(hasErrorsMsg);
    if (!hasErrorsMsg) {
      setErrorState(errors);
      return;
    }
    console.log("hello hosam reda !");
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
  return (
    <main className="container">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 "
        onClick={openModal}
      >
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInput}
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
