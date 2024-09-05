import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ProductId = () => {
  const { items } = useSelector((state) => state.products);

  let params = useParams();
  let clickedProduct = items.filter((item) => item.id == params.id);

  return clickedProduct.map((product) => (
    <ProductItem
      key={product.id}
      imgSrc={product.image}
      imgAlt={product.title}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));
};

export default ProductId;
