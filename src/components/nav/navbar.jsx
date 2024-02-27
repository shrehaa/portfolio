import "./navbar.scss";
import logo from "../../../public/logo.png";
import { motion } from "framer-motion";
import { items } from "../../../constants/constants";

const Navbar = () => {
  return (
    <div className="navbar">
      {items.map((x,idx) => {
        return (
          <motion.a
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            href={`#${x}`}
            key={idx}
          >
            {x}
          </motion.a>
        );
      })}
    </div>
  );
};

export default Navbar;
