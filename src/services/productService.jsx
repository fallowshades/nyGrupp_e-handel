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
        console.log(response);
      } catch (error) {
        console.log("error fetching products", error);
      }
    }
    getData();
  }, []);
  return products ? (
    <div className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-gray-100 border m-4 p-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
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

/* https://thingproxy.freeboard.io/fetch/ */
