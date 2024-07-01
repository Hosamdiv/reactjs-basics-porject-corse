/**
 *
 * @param product
 * @returns
 */

export const productValid = (prod: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  // errorColor: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    // errorColor: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    // errorColor: "",
  };

  // const validColor = /^#([0-9A-F]{3}){1,2}$/i;

  const validUrl = /^\/image\/[^ "]+$/.test(prod.imageURL);

  if (!prod.title.trim() || prod.title.length < 10 || prod.title.length > 80) {
    errors.title = "Product title nust be between 10 ans 80 charactrs!";
  }
  if (
    !prod.description.trim() ||
    prod.description.length < 10 ||
    prod.description.length > 900
  ) {
    errors.description =
      "Product description nust be between 10 ans 900 charactrs!";
  }

  if (!prod.imageURL.trim() || !validUrl) {
    errors.imageURL = "Valid image URL is required";
  }

  if (!prod.price.trim() || isNaN(Number(prod.price))) {
    errors.price = "Valid price is required!";
  }

  // if (!validColor.test(prod.errorColor)) {
  //   errors.errorColor = "A valid color code is required!";
  // }
  return errors;
};
