import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { items } = useSelector((state) => state.products);

  function lol() {}
  return (
    <div>
      <h2>Your Cart:</h2>
      <div>CartItems</div>
      {items.map((product) => (
        <CartItem
          key={product.id}
          img={product.image}
          imgAlt={product.title}
          title={product.title}
          price={product.price}
        />
      ))}

      <div className="h-16 w-60">Cart Total: CartTotal</div>

      <button className="h-16 w-60 bg-slate-300 shadow-lg shadow-black">
        Click to checkout
      </button>
    </div>
  );
};

export default CartPage;
