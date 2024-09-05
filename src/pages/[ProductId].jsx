import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductId = () => {
  const { items } = useSelector((state) => state.products);

  let params = useParams();
  let clickedProduct = items.filter((item) => item.id == params.id);

  console.log(clickedProduct);

  return clickedProduct.map((product) => (
    <div key={product.id}>
      <img src={product.image} alt={product.title}></img>
      <div>
        <h2>{product.title}</h2>
        <p>{product.price} SEK</p>
        <p>{product.description}</p>
      </div>
    </div>
  ));
};

export default ProductId;
