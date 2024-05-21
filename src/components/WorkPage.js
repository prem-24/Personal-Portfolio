import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AboutThemes, DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIconWhite from "../subComponents/SocialIconWhite";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 200vh;
  width: 100vw;
  position: relative;
  @media (max-width: 450px) {
    height: 400vh;
  }
 
`;

const MainWrapper = styled.div`
// background-color: ${(props) => props.theme.body};
height: 200vh;
width: 100vw;

display: flex;
justify-content: center;
align-items: center;

`;


const Main = styled(motion.ul)`
  box-sizing: border-box;
  padding: 30px;
  position: absolute;
  top: 2rem;
  // left: 5%;
  // right: 5%;
  width: 80vw;

  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  justify-items: center;
  color: white;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    // background-color: red;
  }
  @media (max-width: 450px) {
    top: 4rem;
   display:flex;
   flex-direction:column;
   gap:50px;
   width: 90vw;
    // background-color: blue;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  @media (max-width: 450px) {
 
   display:none;
  }
`;

// const SocialIconsWrapper = styled.div`
// @media (max-width: 450px) {
 
//   display:none;
//  }

// `
const Cardthree = {
  gridColumn: "span 2",
  alignItem: "center",
};

const CardFive = {
  gridColumn: "span 2",
  alignItems: "center",
  
};


// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    console.log('Screen width:', window.innerWidth);
    if (window.innerWidth <= 1300) {
      console.log('Applying media query styles');
    }
  }, []);

  return (
    <ThemeProvider theme={AboutThemes}>
      <Box>
        <LogoComponent theme="dark" />
        {/* <SocialIconsWrapper> */}
        <SocialIconWhite color="light" />
        {/* </SocialIconsWrapper> */}
       
        <PowerButton />

      <MainWrapper>
      <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card
              key={d.id}
              data={d}
              style={d.id === 3 ? Cardthree : d.id === 4 ? CardFive : {}}
              
            />
          ))}
        </Main>
      </MainWrapper>

      {/* <RotateWrapper> */}
      <Rotate  ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      {/* </RotateWrapper> */}
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
