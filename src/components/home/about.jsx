import "./about.scss";
import scroll from '../../../public/scroll.png';
import { motion } from "framer-motion";


const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
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

}

const onButtonClick = () => {
  const pdfUrl = './resume.pdf';
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  return (
    <div  className="container">
      <div  className="left">
        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="icons">
          <motion.i variants={textVariants} initial="initial" whileInView="animate" className="fa-brands fa-facebook-f" />
          <motion.i variants={textVariants} initial="initial" whileInView="animate" className="fa-brands fa-instagram" />
          <motion.i variants={textVariants} initial="initial" whileInView="animate" class="fa-brands fa-github"></motion.i>
        </motion.div>
        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="content">
          <motion.h2 initial="initial" whileInView="animate" variants={textVariants}>
            Hi! I am <span>Shreha Chowdhury</span>
          </motion.h2>
          <motion.h1 initial="initial" whileInView="animate" variants={textVariants}>Frontend Developer</motion.h1>
          <motion.p initial="initial" whileInView="animate" variants={textVariants}>
          I develop and maintain responsive and user-friendly web applications.I have a master's degree in computer applications from C-DAC, where I learned various software engineering concepts and technologies, such as data structures, algorithms, databases, web development, and cloud computing. . I am passionate about learning new skills and technologies, and I aspire for a challenging and growth-oriented career in the corporate sector, where I can contribute to the organization's success and enhance my skills.
          </motion.p>
          <button onClick={onButtonClick}>Download Resume</button>
          
          <motion.img style={{cursor:"pointer"}} whileInView="scrollButton" variants={textVariants} src='../../../public/scroll.png'/>
         
          {/* <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingcontainer">
            lorem ipsum ndckjds
          </motion.div> */}
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
