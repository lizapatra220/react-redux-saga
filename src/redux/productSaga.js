import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT, SEARCH, SETPRODUCT } from "./constant";
// import { searchProduct } from "./productAction";
function* getProduct() {
  let data = yield fetch("http://localhost:9000/product");
  data = yield data.json();
  console.log("action is called", data);

  yield put({ type: SETPRODUCT, data });
}
function* searchProduct(data) {
  let result = yield fetch(`http://localhost:9000/product?q=${data.query}`);
  result = yield result.json();
  console.log("action is called", data);

  yield put({ type: PRODUCT, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT, getProduct);
  yield takeEvery(SEARCH, searchProduct);
}
export default productSaga;

// * -- generator function - helps to handle async function
