/**
 *
 * @param product
 * @returns
 */

interface IValid {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export const productValid = (prod: IValid) => {
  const errors: IValid = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };


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


  return errors;
};
