import React from 'react';
import './Projects.css';

const ProjectCard = ({ image, title, description, techLogos, reverse, link }) => {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-card-left">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Technology Logos */}
        <div className="tech-logos">
          {techLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`tech-logo-${index}`} className="tech-logo" />
          ))}
        </div>

        {/* Dynamic Project Link */}
        <a href={link} className="read-more-link" target="_blank" rel="noopener noreferrer">
          View Website &#10140;
        </a>
      </div>
      <div className="project-card-right">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
