import React, { useState } from "react";

const Offerings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordian = [
    {
      id: 1,
      title: "Office of multiple",
      title1: "interest content",
      desc: "Colaborative & partnership",
      detailedContent: "Our collaborative workspace brings together diverse expertise to foster innovation. We create environments where cross-functional teams thrive, leading to breakthrough solutions and meaningful partnerships that drive real business value."
    },
    {
      id: 2,
      title: "The hanger US Air force",
      title1: "digital experimental",
      desc: "We talk about our weight",
      detailedContent: "Transparency is at our core. We openly discuss challenges, metrics, and growth trajectories. By talking about what truly matters, we build trust and ensure every decision is data-driven and outcome-focused."
    },
    {
      id: 3,
      title: "Delta faucel content,",
      title1: "social, digital",
      desc: "Piloting digital confidence",
      detailedContent: "We empower teams with cutting-edge digital tools and AI-driven strategies. Our pilot programs help organizations build confidence in their digital transformation journey, ensuring they stay ahead in an ever-evolving landscape."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 md:mt-30 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <h1 className="text-3xl md:text-7xl font-sans">
          What we{" "}
          <span className="bg-[#D7EEDD] rounded-full px-2 py-1 md:px-3 md:py-2">Can</span>{" "}
          <br />{" "}
          <span className="relative inline-block">
            Offer{" "}
            <img
              src="/zig.png"
              alt="zigzag underline"
              className="absolute left-0 top-full -m-2 md:-m-5 w-full h-auto"
              style={{ transform: "translateY(2px)" }}
            />
          </span>{" "}
          you
        </h1>
        <img
          src="/String.svg"
          alt="Offerings illustration"
          className="w-full mx-auto md:ml-30 -mt-20 md:-mt-60"
        />
      </div>

      <div className="mt-16 md:mt-[120px]">
        {/* Horizontal line with some spacing */}
        <div className="border-t border-gray-300 mb-1" />
        
        {/* Accordion Content */}
        {accordian.map((acc, index) => (
          <div key={acc.id}>
            {/* Accordion Header - Clickable */}
            <div
              className="border-b border-gray-300 py-4 md:py-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="flex justify-between items-start gap-3">
                  <h1 className="text-sm font-semibold flex-1">
                    {acc.title} <br /> {acc.title1}
                  </h1>
                 
                </div>
                <p className="text-base font-sans text-left mt-3">
                  {acc.desc}
                </p>
                 <img
                    src="/images/Arrow.png"
                    alt="Arrow"
                    className="w-22 h-auto mt-4 transition-transform duration-300 flex-shrink-0"
                    style={{
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  />
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[250px_1fr_auto] items-center gap-5">
                <h1 className="text-xl">
                  {acc.title} <br /> {acc.title1}
                </h1>
                <p className="text-5xl font-sans text-left">
                  {acc.desc}
                </p>
                <img
                  src="/images/Arrow.png"
                  alt="Arrow"
                  className=" transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                />
              </div>
            </div>
            
            {/* Accordion Content - Expandable */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-3 md:px-4 py-4 md:py-6 bg-gray-50 rounded-lg my-2">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{acc.detailedContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;