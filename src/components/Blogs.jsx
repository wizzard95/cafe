import React from 'react'
import { blogs } from '../module';
import { ChevronRight } from 'lucide-react';

const Blogs = () => {
  return (
    <section id="blog" className="py-20 bg-white px-5 md:px-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Latest from Our Blog
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Stories, news, and updates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-8">
                <p className="text-sm text-green-700 font-semibold mb-2">
                  {blog.date}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6">{blog.excerpt}</p>
                <button className="text-green-700 font-semibold flex items-center hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs