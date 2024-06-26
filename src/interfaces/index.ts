export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  errorColor: string;
  colorList: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IInput {
  id: string;
  name: "title" | "price" | "imageURL" | "description";
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
