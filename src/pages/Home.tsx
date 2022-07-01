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
  const [letterClass, setlLetterClass] = useState("text-animate");
  const nameArray = ["L", "e", "s", "l", "i", "e"];

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
        <div className="des">
          <h2>
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
