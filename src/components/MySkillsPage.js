import React from 'react'
import styled, {keyframes}from 'styled-components'
import ReactDOM from "react-dom";
import Cube from "react-3d-cube";
import '../subComponents/textAppears.css';



const ContainerSkills = styled.div`

display:flex;
justify-content:center;
align-items:center;
width: 100vw;
height:70vh;
margin-top:2rem;
background-color: #000;
color: #fcfcfc;


h2,h3,h4,h5,h6{
  font-family:'Karla',sans-serif;
  font-weight:500;
}
`
const Box = styled.div`
width: 70%;
height: 40%;
border: 5px solid white;
padding:2rem;
margin: 20px;

@media (max-width: 600px) {
  width: 100%;
  height: auto;
  padding:0rem;

}
`

const StyledDiv = styled.div`
display:inline-grid;
gap: 0vw;
grid-template-columns: repeat(4, 1fr);
color:white;
width: 100%;
height: auto;
justify-items: center;
align-items: center;
font-size: large;
@media (max-width: 600px) {
  grid-template-columns: repeat(1, 1fr);
  font-size: small;
}
`

const animate = keyframes`
 0%
  {
    width:111.250px;
  }
  100%
  {
    width:0px;

  }
`

const H2Skills = styled.h2`
position:relative;
text-decoration: none;
cursor: pointer;
}
`

const A = styled.a`
color:red;
position:relative;
text-decoration: none;
cursor: pointer;
&::before{
  content: attr(data-content);
  position:absolute; 
  overflow-y: hidden;
  color: #1bfaad; 
  white-space:nowrap;
  overflow:hidden;
  
  
}&:hover:{
    color:red;
  }
`

const H2SkillsSpecial = styled.h2`

grid-row: 1 / 3;
grid-column:4;

`

export const MySkillsPage = () => {
  return (
    <ContainerSkills id='skills'>
      <h2 c style={{padding:"2rem"}}>Tech Skills</h2>
     
     {/*  <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Cube size={300} index="front" class="he" display= "flex "align-items="center" justify-content="center">
        <H2Skills alt="front">Java</H2Skills>
          <img
            src="https://png2.cleanpng.com/sh/a3c928336702a2150ee2d1ef76897b5e/L0KzQYm3VMA3N6J2iZH0aYP2gLBuTfpifpIyhNHwbz3zgrFukvFudZpzf591YX7qhbLuhb1raadmReJ1dX2wRbLqVBJmbmM5fKc9NUKxRYW6WMg4O2I2TaQ8MEO8SYm9U8E3QF91htk=/kisspng-java-logo-programming-language-java-plum-5ac7bef24d5452.5438873115230399863168.png"
            alt="right"
          />
          <img
            src={
              "https://w0.pngwave.com/png/780/695/javascript-comment-html-logo-international-conference-on-missions-node-js-icon-png-clip-art.png"
            }
            alt="back"
          />
          <img
            src={
              "https://assets.algoexpert.io/ge96066f5c7-prod/dist/images/pythonLogo.png?4f9d7b95"
            }
            alt="left"
          />
          <img
            src={
              "https://www.transparenttextures.com/patterns/asfalt-light.png"
            }
            alt="top"
          />
          <img
            src={
              "https://www.transparenttextures.com/patterns/asfalt-light.png"
            }
            alt="bottom"
          />
        </Cube>
      </div> */}


     <Box>
       <StyledDiv>
          <H2Skills >
            <ul>
              <li>
                <a href='#projects' class="prueba" data-content="Java">
                 Java
                </a>
              </li>
              <li>
                <a  href='#' class="prueba" data-content="React">
                React
                </a>
              </li>
              <li>
                <a  href='#' class="prueba" data-content="JavaScript">
                JavaScript
                </a>
              </li>
              <li>
                <a  href='#' class="prueba" data-content="HTML">
                HTML
                </a>
              </li>
            </ul>
          </H2Skills>
          <H2Skills>JavaScript</H2Skills>
          <H2Skills>React</H2Skills>
          <H2Skills>HTML</H2Skills>
          <H2Skills>Android</H2Skills>
          <H2Skills>CSS</H2Skills>
          <H2Skills>SQL</H2Skills>
          <H2SkillsSpecial><div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Cube size={300} index="front" class="he" display= "flex "align-items="center" justify-content="center">
        <H2Skills alt="front">Java</H2Skills>
          <img
            src="https://png2.cleanpng.com/sh/a3c928336702a2150ee2d1ef76897b5e/L0KzQYm3VMA3N6J2iZH0aYP2gLBuTfpifpIyhNHwbz3zgrFukvFudZpzf591YX7qhbLuhb1raadmReJ1dX2wRbLqVBJmbmM5fKc9NUKxRYW6WMg4O2I2TaQ8MEO8SYm9U8E3QF91htk=/kisspng-java-logo-programming-language-java-plum-5ac7bef24d5452.5438873115230399863168.png"
            alt="right"
          />
          <img
            src={
              "https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
            }
            alt="back"
          />
          <img
            src={
              "https://assets.algoexpert.io/ge96066f5c7-prod/dist/images/pythonLogo.png?4f9d7b95"
            }
            alt="left"
          />
          <img
            src={
              "https://banner2.cleanpng.com/20180327/crq/kisspng-android-studio-integrated-development-environment-studio-5ab9c86e66b383.0006967115221249104207.jpg"
            }
            alt="top"
          />
          <img
            src={
              "https://www.transparenttextures.com/patterns/asfalt-light.png"
            }
            alt="bottom"
          />
        </Cube>
      </div></H2SkillsSpecial>
          <H2Skills>FireBase</H2Skills>
          <H2Skills>Oracle</H2Skills>
       </StyledDiv>
     </Box>
        
     
    </ContainerSkills>
  )
}

export default MySkillsPage