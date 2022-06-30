import React from "react";
import "./index.scss";

interface Props {}

const Skills = (props: Props) => {
  return (
    <div className="skills">
      <h1 data-aos="fade-up">Skills</h1>
      <div className="skills-set" data-aos="fade-up" data-aos-delay="300">
        <div className="item">
          <h2>Front-End</h2>
          <p>
            HTML CSS Javascript ReactJS NextJS Typescript Sass MaterialUI
            TailwindCSS StyledComponents
          </p>
        </div>
        <div className="item">
          <h2>Back-End</h2>
          <p>
            Node.js Express SQL MySql GraphQL Apollo RestApi PHP Sanity MongoDB
            Mongoose Firebase
          </p>
        </div>
        <div className="item">
          <h2>Development & Deployment</h2>
          <p>Git Github Vercel Heroku Postman Yarn Npm Figma</p>
        </div>
        <div className="item">
          <h2>Testing</h2>
          <p>Jest Testing-library/react Cypress</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
