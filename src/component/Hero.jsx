import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Act from "../assets/d2c57be7-8fd9-4fd5-a16a-6d73f00f4ef0.jpg";
import Rail from "../assets/rail.jpg";
import Police from "../assets/pol.jpg";

const images = [Act, Rail, Police];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen overflow-hidden">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 h-full">

        {/* <h1 className="
          text-2xl 
          sm:text-3xl 
          md:text-5xl 
          lg:text-6xl 
          font-bold 
          text-white 
          leading-tight
        ">
          Your Hero Title
        </h1>

        <p className="
          mt-4 
          text-sm 
          sm:text-base 
          md:text-lg 
          text-gray-200 
          max-w-xl
        ">
          A short description can go here. Keep it powerful and cinematic.
        </p> */}
{/* 
        <button className="
          mt-6 
          px-6 
          py-3 
          bg-white 
          text-black 
          text-sm 
          sm:text-base 
          font-semibold 
          rounded-md 
          hover:bg-gray-200 
          transition
        ">
          Explore More
        </button> */}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white w-6"
                : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
