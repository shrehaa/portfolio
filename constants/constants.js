import react from "../public/reactjs.png";
import redux from "../public/redux.png";
import typeScript from "../public/typeScript.png";
import JavaScript from "../public/javascript.png";
import mui from "../public/mui.png";

import food from "../public/food.png";

export const items = ["About", "Skills", "Projects", "Contact"];
export const skills = [
  {
    name: "react",
    icon: "../../../public/reactjs.png",
  },
  {
    name: "JavaScript",
    icon: "../../../public/javascript.png",
  },
  {
    name: "HTML",
    icon: "../../../public/html.png",
  },
  {
    name: "CSS",
    icon: "../../../public/css.png",
  },
  {
    name: "NodeJS",
    icon: "../../../public/node.webp",
  },
  {
    name: "GIT",
    icon: "../../../public/git.png",
  },
  ,
  {
    name: "Github",
    icon: "../../../public/github.png",
  },
  {
    name: "Material Ui",
    icon: mui,
  },
];
export const projects = [
  {
    name: "Netflix",
    decription:
      "A video streaming app for people to watch various movies, tv series and leaning content too",
    techstack: [react, redux, typeScript, mui],
    icon: movie,
  },
  {
    name: "Weekend Wanderer",
    decription: "COMING SOOOOOOON",
    techstack: [react, redux, typeScript, mui],
    icon: ww,
    demo: "",
    code: "",
  },
];

const dev = "http://localhost:5174/";
export const env = dev;
