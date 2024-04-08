import react from "../public/reactjs.png";
import redux from "../public/redux.png";
import typeScript from "../public/typeScript.png";
import JavaScript from "../public/javascript.png";
import mui from "../public/mui.png";
import ww from "../public/ww.jpg";
import flix from "../public/flix.png";
import gg from "../public/green&grains.png";

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
    name: "Grains & Greens",
    decription:
      "A food delivery app which provides various options like wide range of catergories, scroll the catalog, filter as per mood, search an item, add to cart & extremely healthy food options to the user",
    techstack: [react, JavaScript, mui],
    icon: gg,
    demo: "",
    code: "https://github.com/shrehaa/grains-green",
  },
  {
    name: "Streamix",
    decription:
      "A movie suggestion app for people to find various movies, GPT Search, using the latest GPT-3.5 Turbo API, with  Multi-Language support and advanced data handling with Redex Toolkit.",
    techstack: [react, redux, JavaScript, mui],
    icon: flix,
    demo: "",
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

const dev = "http://localhost:5174/";
export const env = dev;
