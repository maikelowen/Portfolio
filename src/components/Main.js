import React from 'react'
import styled, {keyframes} from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import { Circulo } from './AllSvgs'
import Intro from './Intro'
import SecondPage from './SecondPage'
import ReactDOM from "react-dom"
import { useState } from 'react/cjs/react.development'

const MainMainCotainer = styled.div`
background: ${props => props.theme.body};
overflow:hidden;

position:relative;

h3,h3,h4,h5,h6{
  font-family:'Karla',sans-serif;
  font-weight:500;
}
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height:100vh;
overflow:hidden;

position:relative;

h3,h3,h4,h5,h6{
  font-family:'Karla',sans-serif;
  font-weight:500;
}
`

const Container = styled.div` 
padding:2rem;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: fixed;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const PROJECTS = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 5%;
left: 20%;
text-decoration: none;
z-index:1;
`

const TopBar = styled.div`
display:inline-block;
padding:0px 12px;
margin:0px 8px;
`


const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 5%;
left: 30%;
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
display: inline-flex;
top: 5%;
left: 40%;
text-decoration: none;
z-index:1;

`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '96%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 3s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

const [click, setClick]= useState(false);

const handleClick = () => setClick(!click);

  return (
    <MainMainCotainer>
       <MainContainer>
      <DarkDiv click={click}/>
      <Container>
        {/* <PowerButton/> */}
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        <SocialIcons theme={click ? 'dark' : 'light'}/>
       
        <Center click={click}>
          <Circulo onClick={()=> handleClick()}  width={click ? 60 : 150} height={click ? 60 : 150} fill='currentColor'/>
          <span>Click here</span>
        </Center>


        <Contact target="_blank" to={{pathname:"mailto:mportillaferrero@gmail.com"}}>
          <h2>
            Say hi..
          </h2>
        </Contact>
       <TopBar >
         <PROJECTS to="#projects" click={click}>
          <h2 >
            Projects
          </h2>
        </PROJECTS>
       
          <ABOUT to="#about" click={click}>
            <h2>
              About
            </h2>
          </ABOUT>
          <SKILLS to="#skills" click={click}>
            <h2>
              Skills
            </h2>
          </SKILLS>
        </TopBar> 
        
    
        {click ? <Intro click={click}/>: null }
      </Container>
      
    </MainContainer>

      {click ? <SecondPage click={click}/>:null}
    
    </MainMainCotainer>
   
  )
}

export default Main