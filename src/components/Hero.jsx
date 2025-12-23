import React from "react";
import Fondop from "../assets/fondop.png";
import logoFrances from "../assets/logofrances.png";



const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-600 justify-center items-center flex px-5 md:px-28"
    >
      
      <div className="container mx-auto w-full sm:pt-1 pt-16">
        <div className="flex md:flex-row flex-col items-center gap-20">
          <div className="md:w-1/2 w-full md:order-1 order-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 uppercase">
              No es solo café,
              <span className="text-green-700"> Es Café Frances.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Un rincón inspirado en Francia, donde el aroma del café recién hecho,
               la pastelería artesanal y el placer de disfrutar sin apuro se 
               convierten en una experiencia para todos los sentidos.
            </p>
        {/*     <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition text-lg cursor-pointer">
                Order Now
              </button>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition text-lg cursor-pointer">
                Explore Menu
              </button>
            </div> */}
          </div>
          <div className="relative md:order-2 order-1">
            <img src={Fondop} alt="Coffee" className="md:w-[500px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
