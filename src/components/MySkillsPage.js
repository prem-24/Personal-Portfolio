import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    // background-color: black;
    width: 100%;
  display: flex;
  flex-direction: column;
  height: 170vh;
  margin-top:80px;
  
  }
 
`;

const Main = styled.div`
  border: 2.5px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  border-radius:10px;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 400px) {
    width: 70vw;
  height: 50vh;
  margin-top:50px;
  // background-color: black;
  
  }
  @media (max-width: 800px) {
    // background-color: black;
    width: 70vw;
    height: 50vh;
    margin-top:50px;
  
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
const SocialIconsWrapper = styled.div`
  display: none;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIconsWrapper>
        <SocialIcons color="dark" />  <PowerButton />

        </SocialIconsWrapper>
       <PowerButton/>
        <ParticleComponent theme="light" />
       {/* <Grid > */}
       <Main>
          <Title>
            <Design width={40} height={40} /> UI/UX Designer
          </Title>
          <Description>
          Creating designs that everyone can appreciate, I focus on simplicity and clarity to deliver user-friendly experiences that leave a lasting impact
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
           
           <ul>
              <li>Figma</li>
              <li>PhotoShop</li>
              <li>Sketch</li>
              <li>Illustrator</li>
            </ul>
          
      
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
          I create immersive digital experiences that go above and beyond client expectations. My specialty is creative front-end development that drives brand engagement to new levels.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, WordPress, React, Redux, Bootstrap, Tailwind, Firebase, PostGres, mongoDB, mongoose, nodejs, 
              express, java, DSA, etc..
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Git, PostMan, etc..</p>
          </Description>
        </Main>
       {/* </Grid> */}
        

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
