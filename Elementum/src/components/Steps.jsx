import React from "react";

const Steps = () => {
  return (
    <section className="absolute min-h-screen px-6 md:px-10 py-24 overflow-x-hidden mt-20">
      <div className="ml-20  grid grid-cols-2">
        <div className="flex flex-col mt-20">
          <h1 className="font-sans font-normal text-[50px] leading-[76px] tracking-normal max-w-4xl ">
            <span className="relative inline-block">Tommorrow  <img
              src="/zig.png"
              alt="zigzag underline"
              className="absolute left-0 top-full -m-6 w-full h-auto"
              style={{ transform: "translateY(2px)" }}
            /></span> should be better than{" "}
            <span className="bg-[#D7EEDD] px-3 py-1 rounded-full">today</span>
          </h1>
          <p className="font-normal tracking-normal ">
            We are a team of strategists, designers communicators, researchers.{" "}
            <br />
            Togeather , we belive that progress only happens when you refuse{" "}
            <br /> to play things safe.
          </p>
          <div className="mt-10 flex items-center w-full">
            <p className="font-[20px]font-medium">Read More</p>
            <img src="/images/Arrow.png" className="w-[144px] h-[6px] ml-4" alt="" />
            <img
            src="/images/polygon3.png"
            />
          </div>
        </div>
         <div className="flex">

        <img src="/images/F2.png" className="w-[400px] h-[400px] ml-30" />
        <img src="/imagaes/polygon3.png" 
        className="ml-40"
        alt="" />
         </div>

      </div>
    </section>
  );
};

export default Steps;
