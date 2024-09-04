import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

const ProductService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.log("error fetching products", error);
      }
    }
    getData();
  }, []);
  return products ? (
    <div className="grid grid-cols-1">
      {products.map((product) => (
        <ProductCard
          imgSrc={product.image}
          imgAlt={product.title}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default ProductService;
