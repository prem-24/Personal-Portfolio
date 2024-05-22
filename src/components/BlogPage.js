import React from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";

import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  // background: url(${img}) center/cover no-repeat fixed;

`;

const Container = styled.div`
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.8);
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
 
  @media (max-width: 1200px) {
   
    // background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 10rem;

  @media (max-width: 1200px) {
    // width: 100%; /* Adjust width to fit a single column layout */
    //
    flex-direction: column; 
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    // grid-gap: 20px;

  }
  @media (max-width: 400px) {
    // background-color: red;
    // text-align:center;
    // margin-left:20px;
    width: 100vw;
    // justify-content: center !important;
    // align-items: center;
  }
`;

// Framer-motion config
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
const SocialIconsWrapper = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
  @media (min-width: 400px) and (max-width: 750px) {

    display: none;

}
`;


const BlogPage = () => {
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIconsWrapper>
      <SocialIcons color="dark" />
    </SocialIconsWrapper>
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
