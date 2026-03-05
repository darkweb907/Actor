import React from "react";
import { Link, useParams } from "react-router-dom";

function Project({ details }) {
  const { id } = useParams();
  const project = details.find((item) => item.id === Number(id));

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Responsive Image */}
        <img
          className="
            w-full 
            h-[45vh] 
            sm:h-[55vh] 
            md:h-[65vh] 
            lg:h-[75vh] 
            object-cover 
            object-center
            rounded-lg
          "
          src={project.img}
          alt={project.work}
        />

        {/* Content Wrapper */}
        <div className="pt-8">

          {/* Title */}
          <h1 className="
            text-red-600 
            font-bold 
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            uppercase 
            mb-4
          ">
            {project.work}
          </h1>

          {/* Description */}
          <div className="
            text-gray-700 
            text-base 
            sm:text-lg 
            leading-7 
            space-y-6
          ">
            <p>{project.desc}</p>
          </div>

          {/* Back Link */}
          <div className="pt-12">
            <Link
              to="/"
              className="text-red-600 text-sm hover:underline"
            >
              ← Back to portfolio
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;