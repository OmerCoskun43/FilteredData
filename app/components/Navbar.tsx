// app/components/Navbar.tsx
import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold hidden md:block">
          Rick and Morty
        </h1>
        <ul className="flex space-x-4  mx-auto md:mx-0">
          <li>
            <a href="#" className="text-white hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-600">
              Characters
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
