import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, orderTotal } = useSelector((state) => state.cart);
  console.log(orderTotal, cartItems);
  console.log(cartItems.map((item) => item.id));

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <h2 className="font-bold text-3xl mb-4">Your Cart:</h2>
          {cartItems.map((product) => (
            <CartItem
              key={product.cartID}
              img={product.imgSrc}
              imgAlt={product.imgAlt}
              title={product.title}
              price={product.price}
              cartID={product.cartID}
            />
          ))}
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-6">
          <div className="h-16 w-full flex items-center justify-center border border-slate-300 bg-white text-lg font-semibold rounded-lg">
            Cart Total: ${orderTotal.toFixed(2)}
          </div>
          <button className="h-16 w-full bg-cyan-800 hover:bg-cyan-500 active:bg-cyan-400 text-white rounded-lg shadow-lg flex justify-center items-center gap-4 hover:scale-105 ease-in-out duration-200">
            Click to checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
