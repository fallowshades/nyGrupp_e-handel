import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const HomePage = () => {
  return (
    <div className="">
      <div className="relative flex justify-center items-center flex-col ">
        <div className="p-20 w-full">
          <img
            src="hero.jpg"
            alt="Fashion"
            className="w-full h-[400px] shadow-lg"
          />
        </div>

        <div className="absolute left-10 flex flex-col text-white text-center pl-10">
          <h3 className="text-3xl p-5">More than what you might expect.</h3>
          <p className="text-2xl">Fashion, Beauty, Desig and much more!</p>
        </div>
      </div>
      <ProductService />
      <Outlet />
    </div>
  );
};

export default HomePage;
