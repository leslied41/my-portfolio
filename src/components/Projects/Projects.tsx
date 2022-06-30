import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./index.scss";
import { projectData } from "../../assets/projectData";

interface Props {}

const Projects = (props: Props) => {
  return (
    <div className="projects" id="projectsList">
      <h1 data-aos="fade-up" data-aos-delay="300">
        Projects
      </h1>
      <div className="projectList" data-aos="fade-up">
        {projectData.map((p) => {
          const { name, id, image } = p;
          return <ProjectItem id={id} name={name} image={image} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
