import React from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { items, status, error } = useSelector((state) => state.products);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(items, status, error);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
