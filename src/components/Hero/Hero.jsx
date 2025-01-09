import React from "react";
import "./Hero.css";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Hi, I'm Manali Seth</h1>
      <p className="hero-description">
        Software Engineer | Full Stack Developer
      </p>
      <a href="#contact" className="hero-button">
        Let's Connect
      </a>
    </div>
    <div className="hero-overlay"></div>
  </section>
);

export default Hero;
