import { motion } from 'framer-motion';
import React from 'react'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
box-sizing: border-box;
  width: 100%;
//   height: 40vh;
  background-color: ${props => props.theme.text};
  color: #302E31;
  padding: 1rem 1rem;
  gap:20px;
  border-radius: 30px;
  display: grid; /* Changed from flex to grid */

align-items:center;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
`;

const Title = styled.h2`
font-size: calc(.8em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.6em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${'#302E31'};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 100px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

`
const Img = styled.div`
background-image: ${(props) => `url(${props.img})`};
width: 100%;
height: 200px;
background-size:cover;
border-radius: 30px;
background-position: center center;
}`
// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item} style={props.style}>
            <Title>{name}</Title>
            <Img img={"https://placehold.jp/150x150.png"}>
            </Img >
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer style={{display:"flex",alignItems:"center"}}>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git  href={github}  target="_blank">
                    <Github  color={"dark"}/>
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
