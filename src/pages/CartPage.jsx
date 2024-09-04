import React from "react";
import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <div>
      <h2>Your Cart:</h2>
      <div>CartItems</div>
      {/* Skapat för testning, ej klar */}
      <CartItem />
      <div className="h-16 w-60">Cart Total: </div>
      <button className="h-16 w-60 bg-slate-300 shadow-lg shadow-black">
        Click to checkout
      </button>
    </div>
  );
};

export default CartPage;
