import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../assets/projectData";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "../styles/Project.scss";

type githubType = {
  name: string;
  url: string;
};

const Project = () => {
  const { id } = useParams();
  const data = id ? projectData[Number(id)] : null;
  return (
    data && (
      <>
        <div className="project-main">
          <h1>{data.name}</h1>
          <div className="img-div">
            <iframe src={data.url} width="100%" height="100%" frameBorder="2">
              sorry, iframe failed.
            </iframe>
          </div>

          <div className="project-info">
            <div className="project-skills">
              <p>
                <b>Skills: </b>
                {data.skills}
              </p>
              <div className="project-icon">
                {data.github.map((g: githubType | string, i: number) => {
                  if (typeof g === "string") return;
                  const { name, url } = g;
                  return (
                    <a
                      href={url}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      data-name={name}
                    >
                      <GithubIcon className="github-icon" />
                    </a>
                  );
                })}

                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  data-name="Website"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
            <div className="project-des">
              <p>{data.des}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default Project;
