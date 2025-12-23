import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import logo from "../assets/logofrances.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    desayuno: false,
    postres: false,
    cafes: false,
    comidas: false,
    helados: false,
  });
  const navRef = useRef(null);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      // *Cierra todos los demás menús desplegables y activa el que hayas seleccionado.
      const newState = {
        desayuno: false,
        postres: false,
        cafes: false,
        comidas: false,
        helados: false,
      };
      newState[key] = !prev[key];
      return newState;
    });
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      desayuno: false,
      postres: false,
      cafes: false,
      comidas: false,
      helados: false,
    });
  };

  // * Cerrar menús desplegables al hacer clic fuera de ellos.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdowns({
          desayuno: false,
          postres: false,
          cafes: false,
          comidas: false,
          helados: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileLink = () => setIsMenuOpen(false);
  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white shadow-md z-50 px-5 md:px-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="w-12 md:w-14 cursor-pointer" />
          </div>

              <div className="flex space-x-6">
                  <a href="#home" onClick={() => { closeAllDropdowns(); handleMobileLink(); }} className="text-gray-700 hover:text-green-700 mb-3 transition">🏠</a>
                  <a href="#about" onClick={() => { closeAllDropdowns(); handleMobileLink(); }} className="text-gray-700 hover:text-green-700 transition">Nosotros</a>
                  <a href="#reviews" onClick={() => { closeAllDropdowns(); handleMobileLink(); }} className="text-gray-700 hover:text-green-700 transition">Reseñas</a>
              </div>

          {/* Desktop Menu: Dropdowns */}
          <div className="hidden md:flex items-center space-x-6 py-2">
            {/* Desayunos/Almuerzos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('desayuno')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Desayunos/Almuerzos
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.desayuno && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                  <a href="#breakfast" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Desayunos</a>
                  <a href="#almuerzos" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Almuerzos</a>
                </div>
              )}
            </div>

            {/* Pastelería/Postres */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('postres')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Pastelería/Postres
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.postres && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                  <a href="#menupastry" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pastelería</a>
                  <a href="#tortas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tortas</a>
                  <a href="#crepesd" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Crepes Dulces</a>
                  <a href="#crepess" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Crepes Salados</a>
                  <a href="#waffles" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Waffles</a>
                </div>
              )}
            </div>

            {/* Cafés/Bebidas */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('cafes')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Cafés/Bebidas
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.cafes && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                  <a href="#coffees" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cafés</a>
                  <a href="#coffeescm" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cafés con malicia</a>
                  <a href="#chocolates" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chocolates</a>
                  <a href="#tes" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tés</a>
                  <a href="#icf" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ice Coffee Frapuccino</a>
                  <a href="#jugosBebidas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Jugos y Bebidas</a>
                  <a href="#limonadas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Limonadas</a>
                  <a href="#cervezas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cervezas | Artesanales</a>
                  <a href="#tragos" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tragos</a>
                  
                </div>
              )}
            </div>

            {/* Comidas */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('comidas')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Comidas
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.comidas && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                  <a href="#sandwiches" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sandwiches</a>
                  <a href="#ppff" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Papas fritas</a>
                  <a href="#ensaladas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ensaladas</a>
                  <a href="#huevos" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Paila de Huevos</a>
                  <a href="#omelettes" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Omelettes</a>
                  <a href="#sellados" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sellados</a>
                  <a href="#tostadas" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tostadas</a>
                  <a href="#paraCompartir" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Para compartir</a>
                </div>
              )}
            </div>

            {/* Helados/Otros */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('helados')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Helados
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.helados && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                  <a href="#helados" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Helados</a>
                  <a href="#milkShake" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Milk Shake</a>
                  
                </div>
              )}
            </div>
            {/* producto */}
             <div className="relative">
              <button
                onClick={() => toggleDropdown('productos')}
                className="text-gray-700 hover:text-green-700 transition flex items-center"
              >
                Productos
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdowns.productos && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1 z-30 min-w-max">
                <a href="#products" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Reposteria</a>
                 <a href="#vinos" onClick={closeAllDropdowns} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vinos</a>
                
                </div>
              )}
            </div>
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
          <div className="md:hidden pb-4 uppercase mobile-menu flex flex-col items-center">
           {/*  <a href="#home" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Home🏠</a>
            <a href="#about" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Nosotros</a> */}
            <a href="#breakfast" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Desayunos</a>
            <a href="#almuerzos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Almuerzos</a>
            <a href="#menupastry" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Pastelería</a>
            <a href="#coffees" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Cafés</a>
            <a href="#coffeescm" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Cafés con malicia</a>
            <a href="#chocolates" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Chocolates</a>
            <a href="#tes" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Té</a>
            <a href="#icf" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Ice Coffee Frapucino</a>
            <a href="#tortas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Tortas</a>
            <a href="#crepesd" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Crepes Dulces</a>
            <a href="#crepess" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Crepes Salados</a>
            <a href="#waffles" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Waffles</a>
            <a href="#sandwiches" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Sandwiches</a>
            <a href="#ppff" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Papas fritas</a>
            <a href="#ensaladas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Ensaladas</a>
             <a href="#huevos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Paila de huevos</a>
              <a href="#omelettes" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Omelettes</a>
              <a href="#sellados" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Sellados</a>
             <a href="#tostadas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Tostadas</a>
             <a href="#jugosBebidas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Jugos y Bebidas</a>
             <a href="#limonadas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Limonadas</a>
            <a href="#cervezas" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Cervezas | Artesanales</a>
            <a href="#tragos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Tragos</a>
            <a href="#helados" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Helados</a>
            <a href="#milkShake" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Milk Shake</a>
            <a href="#paraCompartir" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Para Compartir</a>
            <a href="#products" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Reposteria</a>
            <a href="#vinos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Vinos</a>
           {/*  <a href="#reviews" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Reviews</a> */}
          {/*   <a href="#blog" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Blog</a> */}
            {/* <a href="#contact" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Contact</a> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
