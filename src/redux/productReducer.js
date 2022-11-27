import { PRODUCT, SETPRODUCT } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT:
    // console.log("product list  condition", action);
    // return [action.data];
    case SETPRODUCT:
      console.log("product list  condition", action);
      return [...action.data];
    default:
      return data;
  }
};
