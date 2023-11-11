import React, { useState } from 'react';
import './bugattibar.scss';
import logo from '../assets/Bugatti logo.webp';
import music from '../assets/Two_Feet_-_I_Feel_Like_I_m_Drowning_(ColdMP3.com).mp3';
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
      duration:0.4,
      staggerChildren:1,
    },
  },
}


function Bugattibar() {
  const [audio] = useState(new Audio(music));

  const toggleAudio = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <motion.div className="bugattibar" variants={textVariants} initial="initial" animate="animate">
      <button>English</button>
      <img src={logo} alt="Bugatti Logo" />
      <button onClick={toggleAudio}>Audio</button>
    </motion.div>
  );
}

export default Bugattibar;
