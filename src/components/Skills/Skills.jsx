import React from 'react';
import './Skills.css';
import { FaPython, FaReact, FaAws, FaJava, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { VscAzure } from "react-icons/vsc";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPostgresql, SiMysql } from 'react-icons/si'; 

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-grid">
      {/* Frontend Skills */}
      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-list">
          <div className="skill-card">
            <FaReact size={60} />
            <p>React.js</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt size={60} />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <FaHtml5 size={60} />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <TbBrandJavascript size={60} />
            <p>JavaScript</p>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-list">
          <div className="skill-card">
            <FaPython size={60} />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <FaJava size={60} />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <FaNodeJs size={60} />
            <p>Node.js</p>
          </div>
        </div>
      </div>

      {/* Cloud & DevOps Skills */}
      <div className="skills-category">
        <h3>Cloud & DevOps</h3>
        <div className="skills-list">
          <div className="skill-card">
            <FaAws size={60} />
            <p>AWS</p>
          </div>
          <div className="skill-card">
            <VscAzure size={60} />
            <p>Azure</p>
          </div>
          <div className="skill-card">
            <FaDocker size={60} />
            <p>Docker</p>
          </div>
          <div className="skill-card">
            <FaGitAlt size={60} />
            <p>Git & GitHub</p>
          </div>
        </div>
      </div>

      {/* Database Skills */}
      <div className="skills-category">
        <h3>Databases</h3>
        <div className="skills-list">
          <div className="skill-card">
            <FaDatabase size={60} />
            <p>SQL & NoSQL</p>
          </div>
          <div className="skill-card">
            <DiMongodb size={60} />
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <SiPostgresql size={60} />
            <p>PostgreSQL</p>
          </div>
          <div className="skill-card">
            <SiMysql size={60} />
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
