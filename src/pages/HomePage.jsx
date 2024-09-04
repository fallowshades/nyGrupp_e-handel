import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="align-element ">
      <Header />
      <Outlet /> <Link to="/CartItem">CartItem</Link>
      <Footer />{" "}
    </div>
  );
};

export default HomePage;
