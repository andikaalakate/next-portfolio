"use client";

import { useEffect } from "react";
import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";
import "animate.css";
import Header from "@/sections/Header";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Portfolio from "@/sections/Portfolio";
// import Clients from "@/components/Clients";
// import Blogs from "@/sections/Blogs";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import TimeLine from "@/sections/TimeLine";
// import ChatBot from "@/sections/ChatBot";

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <Header />
      <Home />
      <About />
      <TimeLine />
      <Skills />
      <Portfolio />
      {/* <Clients /> */}
      {/* <Blogs /> */}
      {/* <ChatBot /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default page;
