import React, { useState } from 'react';
import './bugattibar.scss';
import logo from '../assets/Bugatti logo.webp';
import music from '../assets/Two_Feet_-_I_Feel_Like_I_m_Drowning_(ColdMP3.com).mp3';

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
    <div className="bugattibar">
      <button>English</button>
      <img src={logo} alt="Bugatti Logo" />
      <button onClick={toggleAudio}>Audio</button>
    </div>
  );
}

export default Bugattibar;
