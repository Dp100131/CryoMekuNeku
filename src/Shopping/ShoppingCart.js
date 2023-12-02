import React, { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <button onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </div>
  );
};