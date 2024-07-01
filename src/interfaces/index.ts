import { ProductNameTypes } from "../types";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  // errorColor: string;
  colorList: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
