import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about-section">
    <h2 className="about-title">About Me</h2>
    <div className="about-content">
      <img
        src="/assets/about/about.jpeg"
        alt="Manali Seth"
        className="about-image"
      />
      <div className="about-text">
        <p>
          I’m a passionate Software Engineer with 4 years of experience in full-stack
          development. I specialize in building scalable and efficient web applications,
          leveraging a diverse tech stack including Python, JavaScript, and modern
          frameworks like React and Django.
        </p>
        <p>
          My journey has been driven by a love for problem-solving and creating innovative
          solutions to improve user experiences.
        </p>
      </div>
    </div>
  </section>
);

export default About;
