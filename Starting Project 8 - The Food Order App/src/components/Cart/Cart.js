import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import CheckOut from "./Checkout";

const Cart = (props) => {
  const [isOrderClicked, setOrderClicked] = useState(false);
  const cartCntxt = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCntxt.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setOrderClicked(true);
  };

  const cartItems = cartCntxt.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      >
        {item.name}
      </CartItem>
    );
  });

  const totalAmount = `$${cartCntxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCntxt.items.length > 0;

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrderClicked && <CheckOut onCancel={props.onCloseCart} />}
      {!isOrderClicked && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
