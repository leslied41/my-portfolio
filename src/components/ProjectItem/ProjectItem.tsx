import React, { FC } from "react";
import "./ProjectItem.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface Props {
  id: number;
  image: string;
  name: string;
  skills: string;
}

const ProjectItem: FC<Props> = ({ name, image, id, skills }) => {
  return (
    //<Link to={`/projects/${id}`}>
    <div className="projectItem">
      <img src={image} alt={name} />
      <div className="overlay">
        <p>{name}</p>
        <p>{skills}</p>
        <Link to={`/layout/projects/${id}`}>
          <Button variant="outlined">Learn More</Button>
        </Link>
      </div>
    </div>
    //</Link>
  );
};
export default ProjectItem;
