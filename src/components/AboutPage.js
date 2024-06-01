import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {AboutThemes} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';

import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import world from '../assets/Images/world.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 25vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
    
}
@media (max-width: 400px) {
    // background-color: black;
    top: 25%;
    right: -10%;
    width: 35vw;
  }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
 border-radius:10px;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 400px) {
    // background-color: black;

    padding: 1rem;
    width: 50%;
    height: auto;
    left: calc(4rem + 2vw);
    top: 8rem;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={AboutThemes}>
<Box>

<LogoComponent theme='dark'/>

<PowerButton />
<ParticleComponent theme='dark' />


        <Spaceman>
            <img src={world} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a frontend developer, and my passion lies in creating digital experiences that are both simple and beautiful, ensuring that every website I build offers users an exceptional journey.


<br /> <br/>
I'm driven by a deep curiosity, constantly immersing myself in the frontend stack, exploring new techniques, and taking on ambitious projects.
<br/> <br/>
Apart from coding, I enjoy the freedom of freelancing, drawing inspiration from the endless world of literature. For me, coding is an art form where each line represents an opportunity for creativity and innovation. Let's connect and explore the world of technology together through my social links.
        </Main>

        {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}


        </Box>

        </ThemeProvider>
   
    )
}

export default AboutPage
