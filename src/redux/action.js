import { ADD } from "./constant";
import { REMOVE } from "./constant";
import { EMPTY } from "./constant";

export const addToCart = (data) => {
  console.log("action add called", data);
  return {
    type: ADD,
    data: data,
  };
};
export const RemoveFromCart = (data) => {
  console.log("action remove called", data);
  return {
    type: REMOVE,
    data: data,
  };
};
export const EmptyCart = () => {
  console.log("action empty called");
  return {
    type: EMPTY,
  };
};
