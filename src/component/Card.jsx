import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ details }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

          {details.map((detail) => (
            <div
              key={detail.id}
              className="bg-slate-900 text-white  overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <img
                src={detail.img}
                alt={detail.work}
                className="w-full h-64 md:h-72 object-cover object-top"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                <div className="flex-grow">
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    {detail.work}
                  </h2>

                  <p className="text-sm text-gray-300">
                    {detail.desc}
                  </p>
                </div>

                {/* Read More (Inside Card) */}
                <div className="mt-6 text-right">
                  <NavLink
                    to={`/blog/${detail.id}`}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Read More →
                  </NavLink>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* View More (Outside Cards) */}
        <div className="text-center mt-14">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-red-600 transition duration-300">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Card;
