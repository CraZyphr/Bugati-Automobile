import React, { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='wrapper'>
        <span>BUGATTI</span>
        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='expanded-menu'>
          <p>1</p>
          <h1>BUGATTI LIFESTYLE</h1>
          <p>2</p>
          <h1>BUGATTI HERITAGE</h1>
          <p>3</p>
          <h1>Models</h1>
          <p>4</p>
          <h1>CUSTOMIZATION</h1>
          <p>5</p>
          <h1>OWNERSHIP</h1>

        </div>
      )}
    </div>
  );
};

export default Navbar;
