import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-5 md:px-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            About Us
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="Coffee Shop"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Since 1971, Starbucks Coffee Company has been committed to
              ethically sourcing and roasting high-quality arabica coffee.
              Today, we're privileged to connect with millions of customers
              every day with exceptional products.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We're passionate about ethically sourcing the finest coffee beans,
              roasting them with great care, and improving the lives of people
              who grow them.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">50+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">30K+</p>
                <p className="text-gray-600">Stores Worldwide</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">100M+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">80+</p>
                <p className="text-gray-600">Coffee Varieties Served Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
