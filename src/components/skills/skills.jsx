import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../../constants/constants";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const { isInView } = useInView(ref, { margin: "-100px", once: true });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      whileInView="animate"
      className="servicecontainer"
    >
      <motion.div variants={variants} whileInView="animate" className="text">
        <motion.p whileInView="animate">
          Learner &gt; Developer
        </motion.p>
        <hr />
      </motion.div>
      <motion.div variants={variants} whileInView="animate" className="title">
        <h2>My skills</h2>
        <motion.h1 whileInView="animate" whileHover={{ color: "orange" }}>Technologies</motion.h1>
      </motion.div>
      <motion.div variants={variants} whileInView="animate" className="list">
        {skills.map((x, idx) => {
          return (
            <motion.div
              variants={variants}
              whileInView="animate"
              whileHover={{ scale: 1.4 }}
              className="box"
              key={idx}
            >
              <img height="100px" width="100px" src={x.icon} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
