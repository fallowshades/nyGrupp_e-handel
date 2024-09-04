import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
const HomePage = () => {
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
    <div className="align-element py-20">
      <Header />
      <div className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            imgSrc={product.image}
            imgAlt={product.title}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
      <Outlet /> <Link to="/CartItem">CartItem</Link>
      <Footer />
    </div>
  );
};

export default HomePage;
