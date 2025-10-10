import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full bg-white container">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Menu Section */}
      <Menu />

      {/* Products Section */}
      <Products />

      {/* Reviews Section */}
      <Reviews />

      {/* Blog Section */}
      <Blogs />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default App;
