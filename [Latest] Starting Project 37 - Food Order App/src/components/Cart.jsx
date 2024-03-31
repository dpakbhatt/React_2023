import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCntx = useContext(CartContext);
  const userProgressCntx = useContext(UserProgressContext);

  const totalAmount = cartCntx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleCloseCart() {
    userProgressCntx.hideCart();
  }

  function handleShowCheckout() {
    userProgressCntx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCntx.progress === "cart"}
      onClose={userProgressCntx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCntx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCntx.addItem(item)}
              onDecrease={() => cartCntx.removeItem(item.id)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalAmount)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCntx.items.length > 0 && (
          <Button onClick={handleShowCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
