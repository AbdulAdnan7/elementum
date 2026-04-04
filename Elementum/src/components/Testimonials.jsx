import React from "react";
import Footer from "./Footer";

const Testimonials = () => {
  return (
      <section className="relative mt-20 md:mt-32 lg:mt-48 pb-16 md:pb-24 lg:pb-3">
      <div className="m-4">
        <h1 className="text-xs md:text-4xl text-center font-sans">
          <span className="bg-[#D7EEDD] px-2 py-1  md:px-3 md:py-2 rounded-full">
            What
          </span>{" "}
          our customers <br /> says{" "}
          <span className="relative inline-block">
            About Us{" "}
            <img
              src="/zig.png"
              alt="zigzag underline"
              className="absolute left-0 top-full -m-1 md:-m-2 w-full h-auto"
              style={{ transform: "translateY(2px)" }}
            />
          </span>{" "}
        </h1>
        <div className="flex items-center justify-center mt-4 md:mt-20">
  <div className="bg-[#D7EEDD4D] text-center w-[703px] h-[252px] flex justify-center items-center relative rounded-3xl">
    {/* Opening fancy double quote */}
    <div className="absolute -top-2 left-6 text-8xl md:text-9xl font-serif text-gray-700/40 transform -rotate-6">
      “
    </div>
    
    <p className="text-center md:text-2xl px-12 max-w-2xl">
      Elementum delivered the site with the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
    </p>
    
    {/* Closing fancy double quote */}
    <div className="absolute -bottom-12 right-44 text-8xl md:text-9xl font-serif text-gray-700/40 transform rotate-6">
      ”
    </div>
  </div>
</div>
      </div>

      <div className="absolute hidden md:block inset-0">
        <img src="/testimonial.png" />
      </div>

    </section>
  );
};

export default Testimonials;
