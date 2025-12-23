import React from "react";
import { reviews } from "../module";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-green-50 to-green-50 px-5 md:px-28"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Opiniones de los clientes
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-4"></div> 
          <p className="text-xl text-gray-600">
            Lo que dicen nuestros clientes sobre nosotros
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
