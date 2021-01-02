import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/action/cartAction";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(productId);
  console.log(qty);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(productId));
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems &&
            cartItems.map((res) => {
              return (
                <li>
                  <div className="cart-image">
                    <img src={res.image} alt="product" />
                  </div>
                  <div style={{display:"flex", alignItems:"flex-end", justifyContent:"flex-start" , flex:1}}>
                    <div className="cart-name" style={{marginRight:20}}>
                      <div>
                        <Link to={`/product/${res.product}`}>{res.name}</Link>
                      </div>
                    </div>
                    <div className="cart-name" style={{marginRight:20}}>
                      Qty:
                      <select value={res.qty} onChange={(e) => dispatch(addToCart(res.product, e.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <button type='button' className='button' onClick={() => removeFromCartHandler(res.product)}>remove</button>
                  </div>
                  <div className="cart-price">${res.price}</div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({cartItems && cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
          items) : ${" "}
          {cartItems && cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          className="button primary full-width"
          disabled={cartItems && cartItems.length === 0}
          onClick={checkoutHandler}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
