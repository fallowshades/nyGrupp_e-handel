import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-evenly">
        <div>
          <img src="logo.png" alt="Logo" className="w-[80px]" />
        </div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
