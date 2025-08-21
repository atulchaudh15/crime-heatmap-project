import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">CrimeMap</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link to="/map" className="text-gray-700 hover:text-blue-600 font-medium">
          Map
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

