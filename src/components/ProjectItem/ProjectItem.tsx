import React, { FC } from "react";
import "./ProjectItem.scss";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  image: string;
  name: string;
}

const ProjectItem: FC<Props> = ({ name, image, id }) => {
  return (
    //<Link to={`/projects/${id}`}>
    <div className="projectItem">
      <img src={image} alt={name} />
      <div className="overlay">
        <p>{name}</p>
        <Link to={`/layout/projects/${id}`}>
          <button>LEARN MORE</button>
        </Link>
      </div>
    </div>
    //</Link>
  );
};
export default ProjectItem;
