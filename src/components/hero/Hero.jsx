import React from 'react';
import './hero.scss';
import videoBg from '../assets/bugatti_intro_30_v14.mp4';
import scrollIcon from '../assets/scroll.png';

import {motion} from 'framer-motion'

const textVariants={
  initial:{
    y:40,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:1,
      repeat:Infinity
    }
  }
  
}

function Hero() {
  return (
    <div className="hero">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="container">
          <motion.h1 variants={textVariants} initial="initial" animate="animate">IF COMPARABLE</motion.h1>
          <motion.h2 variants={textVariants} initial="initial" animate="animate">IT IS NO LONGER BUGATTI</motion.h2>
          <motion.p variants={textVariants} initial="initial" animate="animate">CRAZYPHR</motion.p>
          <motion.h3 variants={textVariants} initial="initial" animate="animate">Immerse yourself in a world</motion.h3>
          <motion.h3 variants={textVariants} initial="initial" animate="animate">of unparalleled artistry.</motion.h3>
          <motion.div className="scrollC" variants={textVariants} initial="initial" animate="animate">
          <motion.img src={scrollIcon}  alt="Scroll"  variants={textVariants} animate="scrollButton"/> 
          <motion.img src={scrollIcon}  alt="Scroll"  variants={textVariants} animate="scrollButton"/> 
          <motion.img src={scrollIcon}  alt="Scroll"  variants={textVariants} animate="scrollButton"/> 
          <p>SCROLL</p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;