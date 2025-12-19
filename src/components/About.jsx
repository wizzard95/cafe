import React from "react";
import aboutImg from "../assets/fachada.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-5 md:px-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="Coffee Shop"
              className="rounded-3xl shadow-xl w-full h-145"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
               en demostraciones de tipografías o de bocetos para diseños para 
               probar el arte visual antes de insertar el texto final.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
               en demostraciones de tipografías o de bocetos para diseños para 
               probar el arte visual antes de insertar el texto final.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">50+</p>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              {/* <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">30K+</p>
                <p className="text-gray-600">Stores Worldwide</p>
              </div> */}
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">100M+</p>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">80+</p>
                <p className="text-gray-600">Variedades de café que se sirven a diario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
