import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import AnimatedLetters from "../components/AnimatedLetters";
import "animate.css";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {}

const Home = (props: Props) => {
  const [mobileMode, setMobileMode] = useState(false);
  const [letterClass, setlLetterClass] = useState("text-animate");
  const nameArray = ["L", "e", "s", "l", "i", "e"];

  useEffect(() => {
    setTimeout(() => {
      setMobileMode(true);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className="Home" id="homeAnchor">
      <div className="header">
        <div className={mobileMode ? "des animation-disappear" : "des"}>
          <h2 className={mobileMode ? "animation-disappear" : ""}>
            <span className={`${letterClass} _1`}>Hi,</span>
            <span className={`${letterClass} _2`}> My</span>
            <span className={`${letterClass} _3`}> Name</span>
            <span className={`${letterClass} _4`}> is</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={5}
            />
          </h2>
        </div>
      </div>
      <hr className="horizontal-line" data-aos="fade-up" />
      <About />
      <hr className="horizontal-line" data-aos="fade-up" />
      <Skills />
      <hr className="horizontal-line" data-aos="fade-up" />
      <Projects />
      <hr className="horizontal-line" data-aos="fade-up" />
    </div>
  );
};

export default Home;
