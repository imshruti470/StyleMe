// src/components/ServiceSection.js

import React from 'react';
import '../styles/Service.css';
import bag from '../assets/bag.avif'
import wardrobe from '../assets/wardobe.webp'
import consult from '../assets/consult.avif'


const Service = () => {
  const services = [
    {
      title: 'Personal Styling',
      description: 'Get personalized styling advice from our fashion experts.',
      image: bag,
    },
    {
      title: 'Wardrobe Makeover',
      description: 'Transform your wardrobe with the latest fashion trends.',
      image: wardrobe,
    },
    {
      title: 'Fashion Consulting',
      description: 'Receive expert fashion consulting for any occasion.',
      image: consult,
    },
  ];

  return (
    <section className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
