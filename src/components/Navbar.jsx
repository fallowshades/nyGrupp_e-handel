import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" shadow p-4 bg-gray-800 w-full">
      <div className="mx-auto flex items-center justify-between">
        <div>
          <img
            src="logo.png"
            alt="Logo"
            className="w-[120px] h-[60px]  rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] px-8 py-2 border border-gray-300 border-r-0 rounded-l-lg focus:outline-none"
          />
          <div className="py-2 bg-white rounded-r-lg pr-2">
            <FaSearch color="Gray" size={24} />
          </div>
        </div>
        <div>
          <button className="border-white border py-3 px-8 rounded-lg hover:scale-105">
            <FaShoppingCart color="White" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
