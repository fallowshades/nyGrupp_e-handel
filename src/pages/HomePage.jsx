import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const HomePage = () => {
  return (
    <div>
      HomePage!
      <ProductService />
      <Outlet />
    </div>
  );
};

export default HomePage;
