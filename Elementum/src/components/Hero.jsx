import ImageTextSection from "./ImageTextSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-10 py-24 text-center overflow-x-hidden">
      {/** Left vertical lines */}
      <div
        className="absolute hidden lg:flex mt-42"
        style={{
          left: 0, 
          top: "50%",
          transform: "translateY(-50%)",
          alignItems: "center",
        }}
      >
        {/* Red curve */}
        <svg
          width="73"
          height="366"
          viewBox="0 0 73 366"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812"
            stroke="#FF7171"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Dark curve – placed directly beside red */}
        <svg
          width="84"
          height="355"
          viewBox="0 0 84 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
            stroke="#0E0E0E"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/*Half Circle*/}
      <img
        src="/H.png"
        alt="decorative"
        className="absolute hidden lg:block -z-10"
        style={{
          width: "155.76px",
          height: "auto",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="font-sans text-[50px] md:text-[62px] lg:text-[80px] leading-[1.2] tracking-tight">
          The{" "}
          <span className="relative inline-block">
            thinkers
            {/* 🖼️ Zigzag image below the word */}
            <img
              src="/zig.png"
              alt="zigzag underline"
              className="absolute left-0 top-full -m-6 w-full h-auto"
              style={{ transform: "translateY(2px)" }}
            />
          </span>{" "}
          and
          <br />
          doers were{"  "}
          <span className="relative inline-flex items-center whitespace-nowrap">
            {/* Separate Background */}
            <div
              className="absolute inset-y-0 bg-[#FFC2EA] rounded-full px-3"
              style={{
                left: "1.7em",
                right: "-1.7rem",
              }}
            />
            <span className="relative z-10">changing</span>
          </span>
          <br />
          the{" "}
          <span className="bg-green-200 px-3 py-1 rounded-full">
            status
          </span>{" "}
          Quo with
        </h1>

        <p className="text-gray-500 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          We are a team of strategists, designers, communicators, and
          researchers. Together, we believe that progress only happens when you
          refuse to play things safe.
        </p>
      </div>
     <div className="mt-40 absolute w-full h-[800px]">
      <ImageTextSection />

     </div>
    </section>
  );
}
