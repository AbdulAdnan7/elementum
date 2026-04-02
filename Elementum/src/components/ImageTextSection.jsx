const positions = [
  "top-4 left-50",
  "top-16 left-10",
  "-top-20 left-1/3",  // 3rd image
  "top-30 left-1/3",  // 4th image
  "top-34 left-[60%]",
  "top-2 right-46",
  "top-44 right-10",
  "top-8 right-[36%]",
];

const positionsMd = [

]

const images = [
  "/images/user2.png",
  "/images/user1.png",
  "/images/user3.png",
  "/images/user4.png",
  "/images/user5.png",
  "/images/user6.png",
  "/images/user7.png",
  "/images/user8.png",
];

const ImageTextSection = () => {
  return (
    <div className="hidden lg:block">
      {images.map((img, i) => {
        // default style
        let style = {
          opacity: 1,
          transform: "rotate(0deg)",
        };

        // Apply horizontal gap for 3rd and 4th images
        if (i === 2) {
          style.transform = "translateX(-50px) rotate(0deg)"; // shift left
        }
        if (i === 3) {
          style.transform = "translateX(60px) rotate(0deg)";  // shift right
        }

        return (
          <div
            key={i}
            className={`absolute ${positions[i]} rounded-full border-4 border-white overflow-hidden hover:scale-105 transition-transform duration-300`}
            style={style}
          >
            <img
              src={img}
              alt={`avatar-${i}`}
              className="sm:w-16 h-16 md:w-[140px] md:h-[140px] lg:w-[190px] lg:h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageTextSection;