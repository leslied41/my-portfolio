import { EndOfLineState } from "typescript";
import phd from "../assets/phd.png";
import teams from "../assets/teams.png";
import robot from "../assets/robot.png";

export const projectData = [
  {
    id: 0,
    name: "CRUD APP",
    image: teams,
    skills: "Node.js Express MongoDB Mongoose JWT Postman",
    url: "https://premier-league-api-frontend.herokuapp.com/",
    github: [
      {
        url: "https://github.com/leslied41/premier_league_api_frontend",
        name: "Front-End",
      },
      {
        url: "https://github.com/leslied41/premier_league_api",
        name: "Back-End",
      },
    ],
    des: "This is a full stack web applciation combined with a ReactJs front-end application and a RestApi created using Node.js, Express, and MongoDB. The React web application allows uesrs to add, edit, delete, sort and search premier leauge teams. Authentication and authorization are implemented through JWT(Json Web Token), users with different role have different authorization.",
  },

  {
    id: 1,
    name: "Movable Robot",
    image: robot,
    skills: "HTML CSS Vanila Javascript",
    url: "https://epic-swartz-3d501b.netlify.app/",
    github: [
      { name: "Github", url: "https://github.com/leslied41/robot_challenge" },
    ],
    des: "This vanilla javascript web application can simulate a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. Multiple robots can be added on the table and only active one can roam around the surface of the table but falling from the table be prevented.",
  },
  {
    id: 2,
    name: "PHD Art Gallery",
    image: phd,
    skills: "Next.js Sanity",
    url: "https://www.phdgroup.art/",
    github: [
      { name: "Github", url: "https://github.com/leslied41/art_gallery_hk" },
    ],
    des: "This PHD Group Project is developed for this contemporary art gallery based in Hongkong. I cooperated with the UI/UX designer and developed this whole project using Next.js for the front-end and headless CMS Sanity as the back-end. For the front-end development, I used a lot SVG manipulation to implement highly interaction with SVG image like changing its fill color or image when hovering. This web applicaiton is highly cusomizable, which means that it allows client to uddate this applicaliton's UX and layout by changing corresponding options or content sotred in Sanity.",
  },
];
