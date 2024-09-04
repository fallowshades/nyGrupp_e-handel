import React from "react";

const ProductCard = ({ imgSrc, imgAlt, title, price, onClick }) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{price}</p>
        <button onClick={onClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
