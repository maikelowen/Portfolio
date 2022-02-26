import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import MySkillsPage from './MySkillsPage'
import AboutPage from './AboutPage'
import ReactDOM from "react-dom";





const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height:250vh;
overflow:hidden;

position:relative;

h3,h3,h4,h5,h6{
  font-family:'Karla',sans-serif;
  font-weight:500;
}
`

const Title = styled.h1`
padding-top:6%;
padding-bottom:3%;
display: flex;
align-items: center;
justify-content: center;
text-color: #fff;
`



const SecondPage = () => {
  return (
    <MainContainer id='projects'>
        <Title >Projects</Title>
        <Carousel></Carousel>
        <MySkillsPage>
         
        </MySkillsPage>
        <AboutPage>
          
        </AboutPage>
    </MainContainer>
  )
}

export default SecondPage