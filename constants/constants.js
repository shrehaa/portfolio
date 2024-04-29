import html from "../public/html.png";
import node from "../public/node.webp";
import css from "../public/css.png";
import gg from "../public/green&grains.png";
import flix from "../public/flix.png";
import ww from "../public/ww.png";

export const items = ["About", "Skills", "Projects", "Contact"];

const reduxURL = "https://i.postimg.cc/rKbmYGxJ/redux.png";
const reactURL = "https://i.postimg.cc/2303nN5g/reactjs.png";
const muiURL = "https://i.postimg.cc/LJ1XdqVM/mui.png";
const javascriptURL = "https://i.postimg.cc/jnS5BZM8/javascript.png";

export const skills = [
  {
    name: "react",
    icon: reactURL,
  },
  {
    name: "JavaScript",
    icon: javascriptURL,
  },
  {
    name: "Redux",
    icon: reduxURL,
  },
  {
    name: "TypeScript",
    icon: "https://i.postimg.cc/R3x0vMPJ/typescript.png",
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
    icon: "https://i.postimg.cc/475y8rQ7/git.png",
  },
  ,
  {
    name: "Github",
    icon: "https://i.postimg.cc/s1jvBg3p/github.png",
  },
  {
    name: "Material Ui",
    icon: muiURL,
  },
];
export const projects = [
  {
    name: "Streamix",
    decription:
      "A sophisticated movie recommendation application designed to provide users with a wide selection of films, powered by cutting-edge technology including highly optimized search engine. This platform boasts multi-language support and employs advanced data handling techniques facilitated by the Redux Toolkit.",
    techstack: [reactURL, reduxURL, javascriptURL, muiURL],
    icon: flix,
    demo: "https://streamixio.netlify.app/",
    code: "https://github.com/shrehaa/flix-pro",
  },
  {
    name: "Grains & Greens",
    decription:
      "An extensively scalable food ordering platform offering a diverse array of categories, equipped with essential features including advanced filtering, seamless searching, and streamlined 'add to cart' functionality. ",
    techstack: [reactURL, javascriptURL, muiURL],
    icon: gg,
    demo: "https://grainsandgreens.netlify.app/",
    code: "https://github.com/shrehaa/grains-green",
  },
  {
    name: "Weekend Wanderer",
    decription:
      "A travel guide app where you can book you vacation packages, explore options for your travel from trekking to luxury trips, find group you can tag yourself along with, find various itineries and much more with GPT 3.5.",
    techstack: [reactURL, reduxURL, javascriptURL, muiURL],
    icon: ww,
    demo: "https://streamixio.netlify.app/",
    code: "https://github.com/shrehaa/flix-pro",
  },
];

//A travel guide app where you can book you vacation packages, explore options for your travel from trekking to luxury trips, find group you can tag yourself along with, find various itineries and much more with GPT 3.5

export const env = import.meta.env.VITE_REACT_ENVIRONMENT;
