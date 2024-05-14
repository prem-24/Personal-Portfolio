import React from "react";
import { motion } from "framer-motion";
import { Github, Behance, Upwork, Dribble } from "../components/AllSvgs";

const Icons = {
  display: "flex",
  flexDirection: "column",
  gap:"20px",
  alignItems: "center",
  position: "fixed",
  bottom: "0px",
  left: "2rem",
  zIndex: 3,
};

const Line = () => {
  const lineStyle = {
    width: "3px",
    height: "120px",
    backgroundColor:"#302E31"
  };

  return <motion.span style={lineStyle} initial={{ scale: 0 }}
  animate={{ scale: [0, 1, 1.5, 1] }}
  transition={{ type: "spring", duration: 0.5, delay: 1 }}></motion.span>;
};

const SocialIcons = ({  color }) => {
  return (
    <div style={Icons}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <div
          style={{ color: "inherit", cursor: "pointer" }}
          onClick={() => window.open("https://github.com/prem-24", "_blank")}
        >
          <Github color={color} />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <div
          style={{ color: "inherit", cursor: "pointer" }}
          onClick={() => window.open("https://www.behance.net/premprem36", "_blank")}
        >
          <Behance color={color} />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <div
          style={{ color: "inherit", cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.upwork.com/freelancers/~0153c37031a94b8d24", "_blank")
          }
        >
          <Upwork color={color} />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <div
          style={{ color: "inherit", cursor: "pointer" }}
          onClick={() => window.open("https://dribbble.com/prem123423", "_blank")}
        >
          <Dribble color={color} />
        </div>
      </motion.div>

      <Line  />
    </div>
  );
};

export default SocialIcons;
