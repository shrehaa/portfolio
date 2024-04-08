import react from "../public/reactjs.png";
import redux from "../public/redux.png";
import typeScript from "../public/typeScript.png";
import JavaScript from "../public/javascript.png";
import html from "../public/html.png"
import mui from "../public/mui.png";
import ww from "../public/ww.png";
import flix from "../public/flix.png";
import gg from "../public/green&grains.png";
import node from "../public/node.webp";
import css from "../public/css.png";
import git from "../public/git.png";
import hub from "../public/github.png"


export const items = ["About", "Skills", "Projects", "Contact"];
export const skills = [
  {
    name: "react",
    icon: react,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "NodeJS",
    icon: node,
  },
  {
    name: "GIT",
    icon: git,
  },
  ,
  {
    name: "Github",
    icon: hub,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
];
export const projects = [
  {
    name: "Grains & Greens",
    decription:
      "A food delivery app which provides various options like wide range of catergories, scroll the catalog, filter as per mood, search an item, add to cart & extremely healthy food options to the user",
    techstack: [react, JavaScript, mui],
    icon: gg,
    demo: "https://grainsandgreens.netlify.app/",
    code: "https://github.com/shrehaa/grains-green",
  },
  {
    name: "Streamix",
    decription:
      "A movie suggestion app for people to find various movies, GPT Search, using the latest GPT-3.5 Turbo API, with  Multi-Language support and advanced data handling with Redex Toolkit.",
    techstack: [react, redux, JavaScript, mui],
    icon: flix,
    demo: "https://streamixio.netlify.app/",
    code: "https://github.com/shrehaa/flix-pro",
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


export const env = import.meta.env.VITE_REACT_ENVIRONMENT;
