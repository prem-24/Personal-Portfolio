import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Github,
  Behance,
  Upwork,
  Dribble,
  Linkedin,
} from "../components/AllSvgs";
import "../components/AllSvg.css";

// Define a styled component for the Icons container
const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  @media (max-width: 450px) {
    left: .2rem;
  }
`;

const Line = () => {
  const lineStyle = {
    width: "3px",
    height: "50px",
    backgroundColor: "white",
  };
  return (
    <motion.span
      style={lineStyle}
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 0.5, delay: 1 }}
    ></motion.span>
  );
};

const SocialIcons = ({ color }) => {
  return (
    <IconsContainer>
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
          onClick={() =>
            window.open("https://www.behance.net/premprem36", "_blank")
          }
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
            window.open(
              "https://www.upwork.com/freelancers/~0153c37031a94b8d24",
              "_blank"
            )
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
          onClick={() =>
            window.open("https://dribbble.com/prem123423", "_blank")
          }
        >
          <Dribble color={color} />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <div
          style={{ color: "inherit", cursor: "pointer" }}
          onClick={() =>
            window.open("https://dribbble.com/prem123423", "_blank")
          }
        >
          <Linkedin color={color} />
        </div>
      </motion.div>

      <Line />
    </IconsContainer>
  );
};

export default SocialIcons;
