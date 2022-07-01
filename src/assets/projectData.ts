import { EndOfLineState } from "typescript";
import phd from "../assets/phd.png";

export const projectData = [
  {
    id: 0,
    name: "PHD Art Gallery",
    image: phd,
    skills: "Next.js Sanity",
    url: "https://www.phdgroup.art/",
    github: [
      { name: "Github", url: "https://github.com/leslied41/art_gallery_hk" },
    ],
    des: "This PHD Group Project is developed for this contemporary art gallery based in Hongkong. I cooperated with the UI/UX designer and developed this whole project using Next.js for the front-end and headless CMS Sanity as the back-end. For the front-end development, I used a lot SVG manipulation to implement highly interaction with SVG image like changing its fill color or image when hovering. This web applicaiton is highly cusomizable, which means that it allows client to uddate this applicaliton's UX and layout by changing corresponding options or content sotred in Sanity.",
  },
  {
    id: 1,
    name: "CRUD APP",
    image: phd,
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
  },
  {
    id: 2,
    name: "Movable Robot",
    image: phd,
    skills: "HTML CSS Vanila Javascript",
    url: "https://epic-swartz-3d501b.netlify.app/",
    github: [
      { name: "Github", url: "https://github.com/leslied41/robot_challenge" },
    ],
    des: "",
  },
  {
    id: 3,
    name: "PHD Art Gallery",
    image: phd,
    skills: "Next.js Sanity",
    url: "",
    github: [],
    des: "",
  },
];
