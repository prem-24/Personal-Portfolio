import React from "react";
import { motion } from "framer-motion";
import { Github, Behance, Upwork, Dribble, Linkedin } from "../components/AllSvgs";
import styled from 'styled-components';

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 2rem;
  z-index: 3;

  @media (max-width: 500px) {
    gap: 5px;
    align-items: center;
    bottom: 15px;
    left: 1rem;
   
  }
`;

const StyledLine = styled(motion.span)`
  width: 3px;
  height: 90px;
  background-color: #302E31;

  @media (max-width: 500px) {
    width: 2px;
    height: 0px;
   
  }
`;

const Line = () => (
  <StyledLine 
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 0.5, delay: 1 }}
  />
);

const SocialIcons = ({ color }) => {
  const iconData = [
    { component: Github, url: "https://github.com/prem-24", delay: 1 },
    { component: Behance, url: "https://www.behance.net/premprem36", delay: 1.2 },
    { component: Upwork, url: "https://www.upwork.com/freelancers/~0153c37031a94b8d24", delay: 1.4 },
    { component: Dribble, url: "https://dribbble.com/prem123423", delay: 1.6 },
    { component: Linkedin, url: "https://www.linkedin.com/in/prem-sawant-637326186/", delay: 1.8 }
  ];

  return (
    <IconsWrapper>
      {iconData.map(({ component: Icon, url, delay }, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay }}
        >
          <div
            style={{ color: "inherit", cursor: "pointer" }}
            onClick={() => window.open(url, "_blank")}
          >
            <Icon color={color} />
          </div>
        </motion.div>
      ))}
      <Line />
    </IconsWrapper>
  );
};

export default SocialIcons;
