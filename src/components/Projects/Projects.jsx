import React from "react";
import './Projects.css';
import { FaPython, FaReact, FaAws, FaNodeJs, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiFlask, SiOpenai } from 'react-icons/si';
import { TbBrandJavascript } from "react-icons/tb";
import projectsData from '../../data/projects.json'; 

const ProjectCard = ({ title, techStack, description, imageUrl, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      
      {/* Tech Stack Display */}
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-icon">
            {tech === "React" && <FaReact size={30} />}
            {tech === "Python" && <FaPython size={30} />}
            {tech === "AWS" && <FaAws size={30} />}
            {tech === "Node.js" && <FaNodeJs size={30} />}
            {tech === "MongoDB" && <DiMongodb size={30} />}
            {tech === "JavaScript" && <TbBrandJavascript size={30} />}
            {tech === "Docker" && <FaDocker size={30} />}
            {tech === "MySQL" && <FaDatabase size={30} />}
            {tech === "GitHub" && <FaGithub size={30} />}
            {tech === "HTML" && <FaHtml5 size={30} />}
            {tech === "CSS" && <FaCss3Alt size={30} />}
            {tech === "Git" && <FaGitAlt size={30} />}
            {tech === "Flask" && <SiFlask size={30} />}
            {tech === "OpenAI" && <SiOpenai size={30} />}
          </div>
        ))}
      </div>
      
      {/* Links to Live Website or GitHub */}
      <div className="project-links">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            View Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
