import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';

import About from './components/about/About';
import HorizontalScroll from "react-scroll-horizontal";
import Lables from './components/lables/Lables';
import Navbar from './components/navbar/Navbar';
import Navbar2 from './navbar2/Navbar2';

const App = () => {
  return (
    <div className="container">
      <HorizontalScroll>
        <div className="content">
      <Navbar/>
          <section className="hero">
            <Hero />
          </section>
          <section className="labels">
            <Lables />
          </section>
          <section className="about">
            <About />
          </section>
          <Navbar2/>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default App;
