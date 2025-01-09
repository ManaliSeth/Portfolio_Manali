import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-text">Feel free to reach out through any of the following channels!</p>
      <div className="contact-links">
        {/* Email Card */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:manali.s@mymailkeeper.com" className="contact-link">
            manali.s@mymailkeeper.com
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/manali-seth/" className="contact-link">
            linkedin.com/in/manali-seth/
          </a>
        </div>

        {/* GitHub Card */}
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/ManaliSeth" className="contact-link">
            github.com/ManaliSeth
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
