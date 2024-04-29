import "./about.scss";
import { motion } from "framer-motion";
import { env } from "../../../constants/constants";
import scroll from '../../../public/scroll.png'
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const onButtonClick = () => {
  const pdfUrl = "./resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  return (
    <div className="container">
      <div className="left">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="icons"
        >
          <motion.i
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="fa-brands fa-facebook-f"
          />
          <motion.i
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="fa-brands fa-instagram"
          />
          <motion.i
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            class="fa-brands fa-github"
          ></motion.i>
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="content"
        >
          <motion.h2
            initial="initial"
            whileInView="animate"
            variants={textVariants}
          >
            Hi! I am <span>Shreha Chowdhury</span>
          </motion.h2>
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={textVariants}
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={textVariants}
          >
            I enjoy bringing a static design or idea to life and learning new
            technologies in the process.
          </motion.p>
          {/* <a href={`${env}resume.pdf`} download="Resume_ShrehaChowdhury.pdf">
            <button>Download Resume</button>
          </a> */}

          <a href="#Skills"><motion.img
            style={{ cursor: "pointer" }}
            whileInView="scrollButton"
            variants={textVariants}
            src={scroll}
            
          />
          </a>
        </motion.div>
      </div>
      <div className="right"></div>
      <div className="design">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default About;
