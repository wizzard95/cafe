import React, { useState, useRef } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import logo from "../assets/logofrances.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const scrollLeft = () => {
    if (!navRef.current) return;
    navRef.current.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!navRef.current) return;
    navRef.current.scrollBy({ left: 240, behavior: "smooth" });
  };
  const handleMobileLink = () => setIsMenuOpen(false);
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-5 md:px-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
           {/*  <img src={logo} alt="logo" className="w-12 md:w-14 cursor-pointer" /> */}
          </div>



{/* Mobile Menu Button */}
      {/*     <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>

 */}
   <div>
                  <a href="#home" className="text-gray-700 hover:text-green-700 transition">🏠</a>
                  <a href="#about" className="text-gray-700 hover:text-green-700 transition">Nosotros</a>
                 </div>

          {/* Desktop Menu: horizontal scroll container */}
          <div className="hidden md:block flex-1 min-w-0">
            
            <div className="relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex z-20">
                <button onClick={scrollLeft} aria-label="scroll left" className="bg-white/90 hover:bg-white p-1 rounded-full shadow ml-1">
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex z-20">
                <button onClick={scrollRight} aria-label="scroll right" className="bg-white/90 hover:bg-white p-1 rounded-full shadow mr-1">
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
               
             
              <div className="nav-scroll min-w-0" ref={navRef}>
                <div className="flex items-center space-x-8 uppercase py-2 flex-nowrap whitespace-nowrap">
                 
                  <a href="#breakfast" className="text-gray-700 hover:text-green-700 transition">Desayunos</a>
                    <a href="#almuerzos" className="text-gray-700 hover:text-green-700 transition">Almuerzos</a>
                  <a href="#menupastry" className="text-gray-700 hover:text-green-700 transition">Pastelería</a>
                  <a href="#coffees" className="text-gray-700 hover:text-green-700 transition">Cafés</a>
                  <a href="#coffeescm" className="text-gray-700 hover:text-green-700 transition">Cafés con malicia</a>
                  <a href="#chocolates" className="text-gray-700 hover:text-green-700 transition">Chocolates</a>
                  <a href="#tes" className="text-gray-700 hover:text-green-700 transition">Tes</a>
                  <a href="#icf" className="text-gray-700 hover:text-green-700 transition">Ice Coffee Frapuccino</a>
                  <a href="#tortas" className="text-gray-700 hover:text-green-700 transition">Tortas</a>
                  <a href="#crepesd" className="text-gray-700 hover:text-green-700 transition">Crepes Dulces</a>
                  <a href="#crepess" className="text-gray-700 hover:text-green-700 transition">Crepes Salados</a>
                  <a href="#waffles" className="text-gray-700 hover:text-green-700 transition">Waffles</a>
                  <a href="#sandwiches" className="text-gray-700 hover:text-green-700 transition">Sandwiches</a>
                  <a href="#ppff" className="text-gray-700 hover:text-green-700 transition">Papas fritas</a>
                  <a href="#ensaladas" className="text-gray-700 hover:text-green-700 transition">Ensaladas</a>
                  <a href="#huevos" className="text-gray-700 hover:text-green-700 transition">Paila de Huevos</a>
                  <a href="#omelettes" className="text-gray-700 hover:text-green-700 transition">Omelettes</a>
                 <a href="#sellados" className="text-gray-700 hover:text-green-700 transition">Sellados</a>
                  <a href="#tostadas" className="text-gray-700 hover:text-green-700 transition">Tostadas</a>
                  <a href="#jugosBebidas" className="text-gray-700 hover:text-green-700 transition">Jugos y Bebidas</a>
                 <a href="#limonadas" className="text-gray-700 hover:text-green-700 transition">Limonadas</a>
                  <a href="#cervezas" className="text-gray-700 hover:text-green-700 transition">Cervezas | Artesanales</a>
                  <a href="#tragos" className="text-gray-700 hover:text-green-700 transition">Tragos</a>
                   <a href="#helados" className="text-gray-700 hover:text-green-700 transition">Helados</a>
                <a href="#milkShake" className="text-gray-700 hover:text-green-700 transition">Milk Shake</a>
                <a href="#paraCompartir" className="text-gray-700 hover:text-green-700 transition">Para compartir</a>
                  <a href="#products" className="text-gray-700 hover:text-green-700 transition">Productos</a>
                   <a href="#vinos" className="text-gray-700 hover:text-green-700 transition">Vinos</a>

                  <a href="#reviews" className="text-gray-700 hover:text-green-700 transition">Reviews</a>
                 {/*  <a href="#blog" className="text-gray-700 hover:text-green-700 transition">Blog</a> */}
                  {/* <a href="#contact" className="text-gray-700 hover:text-green-700 transition">Contact</a> */}
                </div>
              </div>

              {/* left/right fades to indicate scrollable area */}
              <div className="nav-fade-left hidden md:block" aria-hidden />
              <div className="nav-fade-right hidden md:block" aria-hidden />
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
          <div className="md:hidden pb-4 uppercase mobile-menu">
            <a href="#home" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Home🏠</a>
            <a href="#about" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Nosotros</a>
            <a href="#breakfast" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Desayunos</a>
            <a href="#almuerzos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Almuerzos</a>
            <a href="#menupastry" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Pastelería</a>
            <a href="#coffees" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Cafés</a>
            <a href="#coffeescm" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Cafés con malicia</a>
            <a href="#chocolates" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Chocolates</a>
            <a href="#tes" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Tes</a>
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
            <a href="#products" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Productos</a>
            <a href="#vinos" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Vinos</a>
            <a href="#reviews" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Reviews</a>
          {/*   <a href="#blog" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Blog</a> */}
            {/* <a href="#contact" onClick={handleMobileLink} className="block py-2 text-gray-700 hover:text-green-700">Contact</a> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
