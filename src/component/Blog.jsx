import React from "react";
import { Link, useParams } from "react-router-dom";

function Blog({ details }) {
  const { id } = useParams();
  const blog = details.find((item) => item.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20">Post not found</div>;
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
          "
          src={blog.img}
          alt={blog.work}
        />

        {/* Content Wrapper */}
        <div className="pt-8">

          {/* Title */}
          <h1 className="
            text-red-600 
            font-bold 
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            uppercase 
            mb-3
          ">
            CONFESSIONS ON A DANCE FLOOR (THE SILVER COLLECTION) OUT MARCH 27
          </h1>

          {/* Date */}
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            February 5, 2026
          </p>

          {/* Share */}
          <p className="text-red-600 text-sm mb-8 cursor-pointer hover:underline">
            Share
          </p>

          {/* Article */}
          <div className="
            text-gray-700 
            text-sm 
            sm:text-base 
            leading-7 
            space-y-6
          ">

            <p>
              (February 5, 2026 - Los Angeles, CA) For the first time ever,
              the original continuous mix of Madonna’s critically acclaimed
              album Confessions on a Dance Floor (The Silver Collection)
              will be released on vinyl, available March 27.
            </p>

            <p>
              Pressed on 2LP silver vinyl and carefully adapted to its
              groundbreaking technical specifications, this highly regarded
              version preserves the album's nonstop club flow as Madonna intended.
            </p>

            <p>
              Madonna’s collaboration with producer Stuart Price transformed
              her sound into sleek, disco-infused electropop that defined a
              generation of dance music.
            </p>

            {/* Tracklist */}
            <div>
              <h2 className="font-semibold mt-8 mb-4 text-base sm:text-lg">
                Confessions on a Dance Floor (The Silver Collection)
              </h2>

              <div className="space-y-6 text-sm sm:text-base">

                {["A", "B", "C", "D"].map((side, index) => (
                  <div key={side}>
                    <h3 className="font-medium mb-2">Side {side}</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Sample Track One</li>
                      <li>Sample Track Two</li>
                      <li>Sample Track Three</li>
                    </ol>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="pt-12">
            <Link
              to="/"
              className="text-red-600 text-sm hover:underline"
            >
              ← Back to blog
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Blog;
