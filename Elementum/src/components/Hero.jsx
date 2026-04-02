export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-10 py-24 text-center overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-300 opacity-30 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h1 className="font-sans text-[50px] md:text-[62px] lg:text-[80px] leading-[1.2] tracking-tight">
          The{" "}
          <span className="relative inline-block leading-none">
            thinkers
            <svg
              className="absolute left-0 top-full w-full h-4"
              viewBox="0 0 200 20"
            >
              <polyline points="100,2 150,2" stroke="#FACC15" strokeWidth="3" fill="none" />
              <polyline points="160,4 120,8" stroke="#FACC15" strokeWidth="3" fill="none" />
              <polyline points="100,10 160,10" stroke="#FACC15" strokeWidth="3" fill="none" />
            </svg>
          </span>{" "}
          and
          <br />
          doers were{"  "}
          <span className="relative inline-flex items-center whitespace-nowrap">
           {/** Seperate Background */}
            <div
              className="absolute inset-y-0 bg-[#FFC2EA] rounded-full px-3"
              style={{
                left: '1.7em',  
                right: '-1.7rem',
              }}
            />
            <span className="relative z-10">changing</span>
          </span>
          <br />
          the{" "}
          <span className="bg-green-200 px-3 py-1 rounded-full">status</span>{" "}
          Quo with
        </h1>

        <p className="text-gray-500 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          We are a team of strategists, designers, communicators, and researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>
    </section>
  );
}