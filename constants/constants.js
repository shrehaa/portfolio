import react from "../public/reactjs.png";
import redux from "../public/redux.png";
import typeScript from "../public/typeScript.png";
import mui from "../public/mui.png";
import movie from "../public/corn.png";
import ww from "../public/ww.png";
import food from "../public/food.png";

export const items = ["About", "Skills", "Projects", "Experience", "Contact"];
export const skills = [
  {
    name: react,
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
    decription:
      "A video streaming app for people to watch various movies, tv series and leaning content too",
    techstack: [react, redux, typeScript, mui],
    icon: ww,
  },
  {
    name: "Swiggy",
    decription:
      "A video streaming app for people to watch various movies, tv series and leaning content too",
    techstack: [react, redux, typeScript, mui],
    icon: food,
  },
];
