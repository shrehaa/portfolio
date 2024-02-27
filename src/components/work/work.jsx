import React, { useRef } from "react";
import { projects } from "../../../constants/constants";
import "./work.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const Single = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 2], [-300, 300]);

  return (
    <section className="sectioncontainer">
       <div className="text">
        <p >
          What have I done
        </p>
        <hr />
      </div>
      <div className="progress">
        <h1>Featured Work</h1>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.icon} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{project.name}</h2>
            <p>{project.decription}</p>
            <p>
              {project.techstack.map((img, id) => {
                return <img className="tech" src={img} />;
              })}
            </p>
            <div>
              <button>See Demo</button>
              <button>View Code</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  return (
    <div className="workcontainer">
      {projects.map((item, idx) => {
        return <Single project={item} key={idx} />;
      })}
    </div>
  );
};

export default Work;
