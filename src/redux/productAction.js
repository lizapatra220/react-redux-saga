import { PRODUCT, SEARCH } from "./constant";
// import { SETPRODUCT } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT,
  };
};
export const productSearch = (query) => {
  return {
    type: SEARCH,
    query,
  };
};

// export const setProductList = (data) => {
//   console.log("set action");
//   return {
//     type: SETPRODUCT,
//     data,
//   };
// };
