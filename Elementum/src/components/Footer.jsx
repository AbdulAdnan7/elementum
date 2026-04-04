import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-24 lg:mt-62 w-full bg-[#D7EEDD]">
      
      {/* Top arrows */}
      <div className="hidden md:flex justify-center gap-2 p-2">
        <img src="/darr.png" alt="arrow" />
        <img src="/darr2.png" alt="second arrow" />
      </div>

      {/* Newsletter Section */}
      <div className="text-center px-4 py-4 md:px-0">
          {/** Top Section */}
        <div className="relative">

        <h1 className="font-sans text-3xl md:text-6xl">
          Subscribe to <br /> Our newsletter
        </h1>
        <p className="py-2 text-xs md:text-lg">
          To make you more special and even more memorable
        </p>

        <button className="bg-black px-4 py-2 md:px-8 md:py-4 rounded-full mt-4 text-white transition-colors duration-200">
          Subscribe now
        </button>
        </div>
        {/** FOr Image */}
         <div>
            <img src="/H.png" alt="half radius circle"
            className="absolute hidden md:block right-[10%] -mt-[10%] rotate-190"
            />
        </div>
     
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-16 border-b border-black/20"></div>

      {/* Footer Links Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14">
          
          {/* Company */}
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h2 className="font-semibold mb-4">Terms & Policies</h2>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-4">Contact</h2>
            <p className="text-sm leading-relaxed">
              1498 W Fulton St, STE 2D <br />
              Chicago, IL 63867 <br /><br />
              (123) 456789000 <br />
              info@elementum.com
            </p>
          </div>

        </div>

        <div className="flex justify-center items-center mt-10">
            <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;