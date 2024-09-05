import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const [input, setInput] = useState("");

  const products = useSelector((state) => state.products.items || []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  function handleSearch(e) {
    setInput(e.target.value);
  }

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
            value={input}
            placeholder="Search"
            onChange={handleSearch}
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
      {input && (
        <div className="searchItem">
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="bg-white flex items-center my-2 p-2 rounded-md"
                  key={product.id}
                >
                  <li className="flex items-center w-full justify-between">
                    <p className="text-lg font-medium">{product.title}</p>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-md ml-4"
                    />
                  </li>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
