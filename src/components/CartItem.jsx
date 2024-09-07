import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slice/cartSlice";

function CartItem({ img, imgAlt, title, price, cartID }) {
  const dispatch = useDispatch();

  function handleRemove(cartID) {
    dispatch(removeItem(cartID));
  }

  // if () {
  //   return <div>Cart is empty!!</div>;
  // }
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <img
        src={img}
        alt={imgAlt}
        className="h-16 w-16 flex-none rounded-sm object-contain"
      />

      <div className="flex-grow">
        <h5 className="text-md font-semibold">{title}</h5>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>

      <input
        type="number"
        className="w-20 p-1 border rounded border-gray-300 text-center"
        defaultValue={1}
        min={1}
      />
      <div>
        <div className="text-lg font-semibold">Total: {price.toFixed(2)}</div>
        <button
          onClick={() => handleRemove(cartID)}
          className="underline text-slate-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
