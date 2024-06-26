import { v4 as uuid } from "uuid";
import { ICategory, IInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nomine",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi aliquid alias numquam dolorem similique magni eos maiores distinctio nesciunt soluta excepturi ea neque debitis accusantium, ratione aliquam ullam ipsam. ",
    imageURL: "/imges/image1.jpg",
    price: "5000000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image2.jpg",
    price: "450000",
    colorList: ["#111", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image2.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image3.webp",
    price: "600000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image3.webp",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image4.jpg",
    price: "850000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image4.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image5.jpg",
    price: "400000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image5.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image6.jpg",
    price: "550000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image6.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image7.jpg",
    price: "650000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image7.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea,s Gemesis is still in its infancy, having sold its first cars (as an indepr)",
    imageURL: "/imges/image8.jpg",
    price: "350000",
    colorList: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: "/imges/image8.jpg",
    },
  },
];

export const formInputList: IInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2c5",
  "#13005a",
  "#a31acb",
  "#ff6e31",
  "#3c2a21",
  "#6c4ab6",
  "#cb1cbd",
  "#000000",
  "#645cbb",
  "#1f8a70",
  "#820000",
  "#ff0032",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Wade Cooper",
    imageURL: "/imges/image1.jpg",
  },
  {
    id: uuid(),
    name: "Arlene Mccoy",
    imageURL: "/imges/image2.jpg",
  },
  {
    id: uuid(),
    name: "Devon Webb",
    imageURL: "/imges/image3.webp",
  },

  {
    id: uuid(),
    name: "Tanya Fox",
    imageURL: "/imges/image4.jpg",
  },
  {
    id: uuid(),
    name: "Hellen Schmidt",
    imageURL: "/imges/image5.jpg",
  },
  {
    id: uuid(),
    name: "Mason Heaney",
    imageURL: "/imges/image6.jpg",
  },
  {
    id: uuid(),
    name: "Claudie Smitham",
    imageURL: "/imges/image7.jpg",
  },
  {
    id: uuid(),
    name: "Emil Schaefer",
    imageURL: "/imges/image8.jpg",
  },
];
