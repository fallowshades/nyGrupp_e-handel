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
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default ProductService;
