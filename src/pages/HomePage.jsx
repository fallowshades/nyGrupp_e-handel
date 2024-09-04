import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ProductService />
      <Outlet /> <Link to="/CartPage">CartPage</Link>
      <footer>footer</footer>
    </div>
  );
};

export default HomePage;
