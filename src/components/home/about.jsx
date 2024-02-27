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

const About = () => {
  return (
    <div  className="container">
      <div  className="left">
        <motion.div variants={textVariants} initial="initial" animate="animate" className="icons">
          <motion.i variants={textVariants} initial="initial" animate="animate" className="fa-brands fa-facebook-f" />
          <motion.i variants={textVariants} initial="initial" animate="animate" className="fa-brands fa-instagram" />
          <motion.i variants={textVariants} initial="initial" animate="animate" class="fa-brands fa-github"></motion.i>
        </motion.div>
        <motion.div variants={textVariants} initial="initial" animate="animate" className="content">
          <motion.h2 initial="initial" animate="animate" variants={textVariants}>
            Hi! I am <span>Shreha Chowdhury</span>
          </motion.h2>
          <motion.h1 initial="initial" animate="animate" variants={textVariants}>Frontend Developer</motion.h1>
          <motion.p initial="initial" animate="animate" variants={textVariants}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            nihil adipisci sapiente vel voluptatibus doloribus, maiores in
            consequatur facilis dignissimos saepe libero soluta cumque nulla
            iste nemo possimus dicta amet?
          </motion.p>
          
          <motion.img style={{cursor:"pointer"}} animate="scrollButton" variants={textVariants} src='../../../public/scroll.png'/>
         
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
