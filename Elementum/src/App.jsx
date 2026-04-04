import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImageTextSection from "./components/ImageTextSection";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <ImageTextSection />
      <Steps />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
