import React from "react";
import Offerings from "./Offerings";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Steps = () => {

    useEffect(() => {
      AOS.init({ duration: 800, once: true })
    }, [])

  return (
     <section className="relative px-6 md:px-10 mt-2 lg:mt-124">

     {/** FOr first background string */}
      <div className="absolute hidden md:block top-[28%] left-[48%] w-[200px] h-[200px] bg-red-400 opacity-100 blur-[120px] rounded-full animate-float -z-20" />
      <img
        src="/String2.svg"
        alt="decorative string"
        className="
        absolute 
        w-[220%]
        top-[04%]
        left-[0%]
        md:top-[28%] 
        md:left-[16%] 
        md:w-[90%]
       -z-10 
       pointer-events-none
  "
      />


      {/* -------- FIRST SECTION -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:ml-20 items-center" data-aos="fade-up">
        {/* IMAGE */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative md:ml-20">
            {/* Polygon behind */}
            <img
              src="/images/polygon3.png"
              className="absolute top-[14%] right-0 -translate-y-1/2 translate-x-1/2 w-16 sm:w-24 md:w-40 z-0"
              alt="polygon"
            />
            {/* F2 */}
            <img
              src="/images/F2.png"
              className="w-[250px] sm:w-[320px] md:w-[400px] h-auto relative z-10"
              alt="F2"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col order-2 md:order-1 lg:mt-20">
          <h1 className="font-sans font-normal text-3xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight max-w-4xl">
            <span className="relative inline-block">
              Tommorrow{" "}
              <img
                src="/zig.png"
                alt="zigzag underline"
                className="absolute left-0 top-full -m-3 md:-m-5 w-full h-auto"
                style={{ transform: "translateY(2px)" }}
              />
            </span>{" "}
            should <br /> be better than{" "}
            <span className="bg-[#D7EEDD] px-3 py-1 rounded-full">today</span>
          </h1>

          <p className="mt-4 font-normal tracking-normal">
            We are a team of strategists, designers, communicators, researchers.
            <br />
            Together, we believe that progress only happens when you refuse
            <br /> to play things safe.
          </p>

          <div className="mt-10 flex items-center gap-3 flex-wrap">
            <p className="font-medium text-[20px] transition-transform duration-300 group-hover:translate-x-2">Read More</p>
            <img
              src="/images/Arrow.png"
              className="w-24 md:w-[144px] transition-transform duration-300 group-hover:translate-x-3"
              alt="Arrow"
            />
          </div>
        </div>
      </div>

      {/* -------- SECOND SECTION (Image left, text right) -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 items-center" data-aos="fade up">
        {/* IMAGE */}
        <div className="flex justify-center order-1 md:order-1">
          <div className="relative md:mr-20">
            {/* Polygon behind */}
            <img
              src="/Triangle.png"
              className="absolute top-1/4 left-4 -translate-y-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-40 z-0"
              alt="polygon"
            />
            <img
              src="/Triangle.png"
              className="absolute z-50 
             left-1/2 top-1/2 
             -translate-x-1/2 -translate-y-1/2
             w-16 sm:w-24 md:w-34 lg:w-40 md:left-[14rem] md:top-[14rem]
             lg:left-[22rem] lg:top-[22rem]"
              alt="Triangle"
            />
            {/* F1 */}
            <img
              src="/images/F1.png"
              className="w-[250px] sm:w-[320px] md:w-[400px] h-auto relative z-10"
              alt="F1"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col order-2 md:order-2 lg:mt-20">
          <h1 className="font-sans font-normal text-3xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight max-w-4xl">
            <span className="bg-[#D7EEDD] px-3 py-1 rounded-full">See</span> how
            we can <br /> help you{" "}
            <span className="relative inline-block">
              Progress{" "}
              <img
                src="/zig.png"
                alt="zigzag underline"
                className="absolute left-0 top-full -m-3 md:-m-5 w-full h-auto"
                style={{ transform: "translateY(2px)" }}
              />
            </span>
          </h1>

          <p className="mt-4 font-normal tracking-normal">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms, and social research.
          </p>

          <div className="mt-10 flex items-center gap-3 flex-wrap">
            <p className="font-medium text-[20px]">Read More</p>
            <img
              src="/images/Arrow.png"
              className="w-24 md:w-[144px]"
              alt="Arrow"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Steps;
