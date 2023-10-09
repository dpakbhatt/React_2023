import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = () => {};

  const removeItemFromCartHandler = () => {};

  const cartContent = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
