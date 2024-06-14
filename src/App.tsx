import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  /*______STATE_______*/
  const [isOpen, setIsOpen] = useState(false);

  /*______HANDKER_______*/
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  /*______RENDERS_______*/

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container">
       <Button className="bg-indigo-700 hover:bg-indigo-800 " onClick={openModal}>
          Add
        </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3">
        <Button className="bg-indigo-500 hover:bg-indigo-800">
          Submit
        </Button>
        <Button className="bg-gray-300 hover:bg-gray-800 ">
          Cancel
        </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
