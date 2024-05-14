import React from 'react'
import styled from 'styled-components'
import { DarkTheme} from '../components/Themes'

// console.log(DarkTheme)

// const color = {}
const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : "#3C3C3C"};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
  // console.log(props)
    return (
        <Logo color={props.theme}>
          PK
        </Logo>
    )
}

export default LogoComponent
