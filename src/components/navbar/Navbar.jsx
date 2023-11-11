import React, { useState } from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    y: -5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const bugListVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const bugListVariants2 = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <motion.div className='wrapper' variants={textVariants} initial="initial" animate="animate">
        <motion.span variants={textVariants}>BUGATTI</motion.span>
        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </motion.div>

      {isMenuOpen && (
        <div className='expanded-menu'>
          <motion.p variants={bugListVariants} initial="initial" animate="animate" whileHover={{ color: 'blue', transition: { duration: 0.1} }}>
            BUGATTI LIFESTYLE
          </motion.p>
          <motion.p variants={bugListVariants2} initial="initial" animate="animate"whileHover={{ color: 'blue', transition: { duration: 0.1} }}>
            BUGATTI HERITAGE
          </motion.p>
          <motion.p variants={bugListVariants} initial="initial" animate="animate" whileHover={{ color: 'blue', transition: { duration: 0.1} }}>
            Models
          </motion.p>
          <motion.p variants={bugListVariants2} initial="initial" animate="animate" whileHover={{ color: 'blue', transition: { duration: 0.1 } }}>
            CUSTOMIZATION
          </motion.p>
          <motion.p variants={bugListVariants} initial="initial" animate="animate" whileHover={{ color: 'blue', transition: { duration: 0.1 } }}>
            OWNERSHIP
          </motion.p>
          <div className="sec">
          <motion.h7
  variants={textVariants}
  initial="initial"
  animate="animate"
  whileHover={{ color: 'blue', transition: { duration: 0.3 } }}
>
  About Us
</motion.h7>
<motion.h7
  variants={textVariants}
  initial="initial"
  animate="animate"
  whileHover={{ color: 'blue', transition: { duration: 0.3 } }}
>
  Contact
</motion.h7>
<motion.h7
  variants={textVariants}
  initial="initial"
  animate="animate"
  whileHover={{ color: 'blue', transition: { duration: 0.3 } }}
>
  Find a Dealer
</motion.h7>
<motion.h7
  variants={textVariants}
  initial="initial"
  animate="animate"
  whileHover={{ color: 'blue', transition: { duration: 0.3 } }}
>
  News & Yeagerist
</motion.h7>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
