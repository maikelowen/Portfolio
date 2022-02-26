import React from 'react'
import styled from 'styled-components'
import ReactDOM from "react-dom";
import Cube from "react-3d-cube";



const MainContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
width: 100vw;
height:70vh;
margin-top:2rem;
color: #fcfcfc;


h2,h3,h4,h5,h6{
  font-family:'Karla',sans-serif;
  font-weight:500;
}
`

  

export const AboutPage = () => {
  return (
    <MainContainer>
       <div class="wrapper">
          <div class="bg">
            <div class="text">Prueba</div>
          </div>
        </div>
    </MainContainer>
    
  )
}
export default AboutPage