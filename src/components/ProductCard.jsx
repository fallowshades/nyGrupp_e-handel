import React from "react";

const ProductCard = ({ imgSrc, imgAlt, title, price, onClick }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-48 object-contain mb-2"
      />
      <div className="flex flex-col m-5 gap-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500">{price} SEK</p>
        <button
          onClick={onClick}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
