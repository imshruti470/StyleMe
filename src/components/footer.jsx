// src/components/Footer.js

import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Fashionista</h3>
          <p>
            Fashionista is your go-to destination for the latest in fashion trends, styling tips, and more. Stay chic and stylish with us.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Fashion Ave, New York, NY
          </p>
          <p>
            <FaPhone /> +1 234 567 890
          </p>
          <p>
            <FaEnvelope /> info@fashionista.com
          </p>
        </div>
        <div className="footer-section socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fashionista | Designed with love by Shruti </p>
      </div>
    </footer>
  );
};

export default Footer;
