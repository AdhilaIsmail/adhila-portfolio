import React from 'react';

const ProjectCard = ({ project }) => {
  const card = (
    <>
      <div className="project-visual">
        <img src={project.image} alt="" />
        <span className="project-category">
          {project.category} <i>·</i> {project.number}
        </span>
        <span className="project-arrow" aria-hidden="true">
          {project.link ? '↗' : '→'}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-meta">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {project.link && (
            <span className="project-live">
              LIVE PROJECT <i aria-hidden="true">↗</i>
            </span>
          )}
        </div>
      </div>
    </>
  );

  return project.link ? (
    <a
      className="project-card"
      href={project.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} — open live project`}
    >
      {card}
    </a>
  ) : (
    <article className="project-card">{card}</article>
  );
};

export default ProjectCard;