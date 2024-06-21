// src/components/AboutSection.js

import React from 'react';
import '../styles/About.css';
import company from '../assets/company.webp'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 >About Us</h2>
          <p>
            Welcome to Fashionista, your number one source for all things fashion. We're dedicated to providing you the very best of style, with an emphasis on quality, uniqueness, and customer service.
          </p>
          <p>
            Founded in 2020, Fashionista has come a long way from its beginnings. When we first started out, our passion for fashion drove us to start our own business.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="about-image">
          <img src={company} alt="Fashion" />
        </div>
      </div>
    </section>
  );
};

export default About;
