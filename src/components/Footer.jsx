import React from "react";
import logo from "../assets/logofrances.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-gray-400">
          <div className="flex items-center justify-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-12 md:w-14 cursor-pointer"
            />
          </div>
          <p>
            &copy; {new Date().getFullYear()}
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
