// src/components/HeroSection.js

import React from 'react';
import '../styles/Home.css';

import About from './about';
import Service from './services';


const Home = () => {
  return (
    <>
    
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Be your icon</h1>
          <p>Your growth to be determined exponentially, with the way you walk</p>
          <button className="cta-button">Get Started</button>
        </div>
        
      </div>
    </section>
    <Service/>
    <About/>
    
    </>
  );
};

export default Home;
