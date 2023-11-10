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
          
          <p className='bl'>BUGATTI LIFESTYLE</p>
          
          <p className='bh'>BUGATTI HERITAGE</p>
          
          <p className='m'>Models</p>
         
          <p className='c'>CUSTOMIZATION</p>
          
          <p className='0'> OWNERSHIP</p>
          <div className="sec">
          <h7>About Us </h7>
          <h7>Contact </h7>
          <h7>Find a Dealer </h7>
          <h7>News & Yeagerist</h7>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
