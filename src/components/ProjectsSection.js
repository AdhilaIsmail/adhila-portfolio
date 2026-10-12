import React from 'react';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Blood Bank & Laboratory System',
    category: 'Healthcare platform',
    image: '/blood4.jpg',
    description:
      'A platform for donor engagement, inventory management, hospital transactions, and laboratory operations.',
    tags: ['Python', 'Django', 'HTML / CSS'],
    link: 'https://medlabbloodbank.netlify.app/',
  },
  {
    number: '02',
    title: 'Game Pop-up Animation',
    category: 'Interaction design',
    image: '/game.png',
    description:
      'Full-page and compact celebration pop-ups with responsive layouts and lively animated interactions.',
    tags: ['Next.js', 'React', 'Material UI'],
    link: 'https://celebrationpopup.netlify.app/',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    category: 'Web development',
    image: '/portfolio.png',
    description:
      'A portfolio showcasing my development work, testing skills, and selected projects.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://portfolioadhila.netlify.app/',
  },
  {
    number: '04',
    title: 'Weather App',
    category: 'Live weather data',
    image: '/blood5.jpg',
    description:
      'A weather dashboard concept with current conditions and a multi-day forecast.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://weatherlooking.netlify.app/',
  },
  {
    number: '05',
    title: 'Video Meet',
    category: 'Real-time communication',
    image: '/videomeet.jpg',
    description:
      'A browser-based video meeting project exploring real-time communication with WebRTC.',
    tags: ['WebRTC', 'JavaScript', 'Video'],
    link: '',
  },
];

const ProjectsSection = () => (
  <section className="projects-section" id="work">
    <div className="projects-heading">
      <div>
        <p className="eyebrow">Selected work</p>
        <h2>Projects in practice.</h2>
      </div>
      <span className="projects-count">01 — 05 / BUILT &amp; TESTED</span>
    </div>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <Reveal key={project.number} delay={index * 90}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;