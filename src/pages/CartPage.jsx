import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, cartTotal, orderTotal } = useSelector(
    (state) => state.cart
  );
  console.log(orderTotal, cartTotal);
  console.log(cartItems.map((item) => item.id));

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <h2 className="font-bold text-3xl mb-4">Your Cart:</h2>
          {cartItems.map((product, index) => (
            <CartItem
              key={`${product.id}-${index}`}
              img={product.image}
              imgAlt={product.title}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-6">
          <div className="h-16 w-full flex items-center justify-center border border-slate-300 bg-white text-lg font-semibold rounded-lg">
            Cart Total: ${orderTotal.toFixed(2)}
          </div>
          <button className="h-16 w-full bg-cyan-800 hover:bg-cyan-500 text-white rounded-lg shadow-lg flex justify-center items-center gap-4 hover:scale-105 ease-in-out duration-300">
            Click to checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
