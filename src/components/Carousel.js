import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import styled from 'styled-components'

const Img = styled.img`
width: 100%;
height: auto;
min-width: 50vw;
`

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  };

  slides = [
    {
      key: uuidv4(),
      content: 
      <div style={{height:"70vh", width:"50vw"}}>
        <Img src="KryptoDeskFoto.jpg" alt="1" />
        <h1>Titulo</h1>
        <br/>
        <h2>Subtitulo</h2>
        <p>Link</p>
      </div>
        
    },
    {
      key: uuidv4(),
      content: 
      <div style={{height:"70vh", width:"50vw"}}>
        <Img src="KryptoDeskFoto.jpg" alt="1" />
        <h1>Titulo</h1>
        <br/>
        <h2>Subtitulo</h2>
        <p>Link</p>
      </div>
    },
    {
      key: uuidv4(),
      content:  
      <div style={{height:"70vh", width:"50vw"}}>
        <Img src="KryptoDeskFoto.jpg" alt="1" />
        <h1>Titulo</h1>
        <br/>
        <h2>Subtitulo</h2>
        <p>Link</p>
      </div>
    },
    {
      key: uuidv4(),
      content: 
      <div style={{height:"70vh", width:"50vw"}}>
        <Img src="KryptoDeskFoto.jpg" alt="1" />
        <h1>Titulo</h1>
        <br/>
        <h2>Subtitulo</h2>
        <p>Link</p>
      </div>
    },
    {
      key: uuidv4(),
      content: 
      <div style={{height:"70vh", width:"50vw"}}>
        <Img src="KryptoDeskFoto.jpg" alt="1" />
        <h1>Titulo</h1>
        <br/>
        <h2>Subtitulo</h2>
        <p>Link</p>
      </div>
    },
    {
      key: uuidv4(),
      content: <Img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <Img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <Img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "50vw", height: "80vh", margin: "0 auto", paddingBottom: "10%"}}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "1rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
            
          }}
        >      
        </div>
      </div>
    );
  }
}