import React, { useState } from "react";
import {
  Menu,
  X
} from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-5 md:px-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="w-12 md:w-14 cursor-pointer" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 uppercase">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-700 transition"
            >
              About
            </a>
            <a
              href="#menu"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Menu
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Products
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Reviews
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 uppercase">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              About
            </a>
            <a
              href="#menu"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Menu
            </a>
            <a
              href="#products"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Products
            </a>
            <a
              href="#reviews"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Reviews
            </a>
            <a
              href="#blog"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-green-700"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
