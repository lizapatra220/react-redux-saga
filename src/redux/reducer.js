import { ADD, EMPTY, REMOVE } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD) {
  //     console.log("reducer called", action);
  //     return action.data;
  //   } else {
  //     return "no action called";
  //   }
  switch (action.type) {
    case ADD:
      console.log("add to cart condition", action);
      return [action.data, ...data];
    case REMOVE:
      console.log("remove from cart condition", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingData = data.filter((item) => item.id !== action.data);
      return [...remainingData];
    case EMPTY:
      console.log("empty cart condition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
