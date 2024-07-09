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
import { ProductNameTypes } from "./types";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colorList: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /*______STATE_______*/
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenComfirmModal, setIsOpenComfirmModal] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errorState, setErrorState] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colorList: [],
  });

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct);
  const [productEditIdx, setProductEditIdx] = useState<number>(0);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /*______HANDLER_______*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const closeEditModal = () => setIsOpenEdit(false);
  const openEditModal = () => setIsOpenEdit(true);

  const closeConfirmModal = () => setIsOpenComfirmModal(false);
  const openConfirmModal = () => setIsOpenComfirmModal(true);

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

  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductEdit({
      ...productEdit,
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

  const removeProductHandler = () => {
    const filtered = products.filter((prod) => prod.id !== productEdit.id);
    setProducts(filtered);
    closeConfirmModal();

    toast("Product has been deleted", {
      icon: "👏",
      style: {
        background: "#000",
        color: "#fff",
        padding: "15px",
      },
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price }
    = product;
    const errors = productValid({
      title,
      description,
      imageURL,
      price,
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

    setProduct(defaultProduct);
    setTempColor([]);
    onCancel();

    toast("Product has been deleted", {
      icon: "👏",
      style: {
        background: "#000",
        color: "#fff",
        padding: "15px",
      },
    });
  };

  const submitEditHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productEdit;
    const errors = productValid({
      title,
      description,
      imageURL,
      price,
      
    });

    const hasErrorsMsg = Object.values(errors).some((val) => val !== "");

    if (hasErrorsMsg) {
      setErrorState(errors);
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[productEditIdx] = {
      ...productEdit,
      colorList: tempColor.concat(productEdit.colorList),
    };
    setProducts(updatedProducts);

    setProductEdit(defaultProduct);
    setTempColor([]);
    closeEditModal();
    toast("Product has been deleted", {
      icon: "👏",
      style: {
        background: "#000",
        color: "#fff",
        padding: "15px",
      },
    });
  };

  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      serProductEdit={setProductEdit}
      openEditModal={openEditModal}
      idx={idx}
      setProductEditIdx={setProductEditIdx}
      openConfirmModal={openConfirmModal}
    />
  ));

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
        if (productEdit.colorList.includes(color)) {
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

  const renderProductEditErrorMsg = (
    id: string,
    label: string,
    name: ProductNameTypes
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errorState[name]} />
      </div>
    );
  };

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

      {/* ADD PRODUCT MODAL*/}
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

      {/* EDIT PRODUCT MODAL*/}

      <Modal
        isOpen={isOpenEdit}
        closeModal={closeEditModal}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditErrorMsg("title", "product title", "title")}
          {renderProductEditErrorMsg(
            "description",
            "product description",
            "description"
          )}
          {renderProductEditErrorMsg(
            "imageURL",
            "product imageURL",
            "imageURL"
          )}
          {renderProductEditErrorMsg("price", "product price", "price")}

          <Select
            selected={productEdit.category}
            setSelected={(value) =>
              setProductEdit({ ...productEdit, category: value })
            }
          />

          <div className="flex items-center flex-wrap my-4 space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center flex-wrap my-4 space-x-1">
            {tempColor.concat(productEdit.colorList).map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
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

      <Modal
        isOpen={isOpenComfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Stere?"
      >
        <p className="my-5">
          Deleting this product will remove it permanently from your inventory.
          Any associated data, sales history, and other telated imformation will
          also be deleted. Please make sure this is the intended action.
        </p>
        <div className="flex items-center space-x-3">
          <Button
            className="bg-[#c2344d] hover:bg-red-800"
            onClick={removeProductHandler}
          >
            Yes remove
          </Button>
          <Button
            className="bg-gray-500 hover:bg-gray-800 text-black"
            onClick={closeConfirmModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      <Toaster />
    </main>
  );
};

export default App;
