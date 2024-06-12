import Image from "./Image";
import Button from "./ui/Button";

interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        imageURL="/src/imges/image1.jpg"
        alt="product name"
        className="rounded-md mb-2"
      />
      <h3>2022 Genesis GV70: Nomine</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
        cupiditate?
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500.000</span>
        <Image
          imageURL="/src/imges/image1.jpg"
          alt="product name"
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700"
         onClick={() => console.log("click")}>
          EDIT
        </Button>
        <Button className="bg-red-700">DELETE</Button>
        <Button className="bg-slate-900">LOADENG</Button>
        <Button className="bg-green-700">SUCCESS</Button>
        <Button className="bg-gray-700">CANCEK</Button>
      </div>
    </div>
  );
};

export default ProductCard;
