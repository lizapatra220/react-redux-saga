import { addToCart, EmptyCart, RemoveFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data main component from saga", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>name:{item.name}</div>
            <div>color:{item.color}</div>
            <div>price:{item.price}</div>
            <div>brand:{item.brand}</div>
            <div>category:{item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                add to cart
              </button>
              <button onClick={() => dispatch(RemoveFromCart(item.id))}>
                remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
