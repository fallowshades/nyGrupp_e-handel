import React from "react";

function CartItem({ img, imgAlt, title, price }) {
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

      <div className="text-lg font-semibold">Total: {price.toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
