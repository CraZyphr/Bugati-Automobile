import React from 'react';
import './hero.scss';
import videoBg from '../assets/bugatti_intro_30_v14.mp4';
import scrollIcon from '../assets/scroll.png';

function Hero() {
  return (
    <div className="hero">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="container">
          <h1>IF COMPARABLE</h1>
          <h2>IT IS NO LONGER BUGATTI</h2>
          <p>CRAZYPHR</p>
          <h3>Immerse yourself in a world</h3>
          <h3>of unparalleled artistry.</h3>
          <img src={scrollIcon} alt="Scroll" /> 
        </div>
      </div>
    </div>
  );
}

export default Hero;