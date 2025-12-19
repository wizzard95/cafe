import React from "react";
import { sellados } from "../module";

const Sellados = () => {
  return (
    <section
      id="sellados"
      className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-5 md:px-28"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Sellados
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            “Todas las penas son menores con el pan.” ―Miguel de Cervantes Saavedra
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellados.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg transform hover:-translate-y-2.5 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded mb-5 h-[200px] w-full object-cover"
              />
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-green-700 font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                </div>
                <span className="text-2xl font-bold text-green-700">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{item.description}</p>
             {/*  <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-full font-semibold transition cursor-pointer">
                Add to Order
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sellados;
