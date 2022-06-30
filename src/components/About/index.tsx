import React from "react";
import "./index.scss";
import me from "../../assets/me.png";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
const resume = require("../../assets/resume.pdf");

interface Props {}

const About = (props: Props) => {
  const saveFile = () => {
    saveAs(resume);
  };
  return (
    <div className="about">
      <div className="left">
        <h1 data-aos="fade-up">About Me</h1>
        <div className="resume">
          <Button
            variant="outlined"
            data-aos="fade-up"
            className="resumeBtn"
            onClick={saveFile}
          >
            Resume
          </Button>
        </div>

        <div className="intro" data-aos="fade-up" data-aos-delay="300">
          <p>
            Motivated full stack web developer with experience building web
            applications, focusing on HTML, CSS, JavaScript, React, Next.js,
            Node.js. Dedicated and passionate to following and learning new
            technologies and languages, and facilitating early adoption of
            innovations. Enjoy problem-solving and collaborating with team
            members for the achievement of team goals.
          </p>
        </div>
      </div>
      <div className="right" data-aos="fade-left" data-aos-delay="1300">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};
export default About;
