import "./navbar.scss";
import logo from "../../../public/logo.png";
import { motion } from "framer-motion";

const items = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  return (
    <div className="navbar">
      {items.map((x) => {
        return (
          <motion.a
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            href={`#${x}`}
          >
            {x}
          </motion.a>
        );
      })}
    </div>
  );
};

export default Navbar;
