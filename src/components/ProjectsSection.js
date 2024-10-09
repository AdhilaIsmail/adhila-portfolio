import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const ProjectsSection = () => {
  const projects = [
    {
      image: '/Blood4.jpg',
      title: 'Blood Bank & Laboratory System',
      description: 'Medlab Blood Bank is a comprehensive platform designed to optimize blood bank and laboratory operations. It streamlines processes such as donor engagement, inventory management, hospital transactions, and laboratory procedures, enhancing overall efficiency and service provision.',
      techLogos: ['/python-logo.png','/django.png','/htmllogo-removebg-preview.png','/css3logo.png','/bootstrap.png'],
      link: 'https://medlabbloodbank.onrender.com/' // Link for the first project
    },
    {
      image: '/game.png',
      title: 'Game Pop up Animation',
      description: 'This project implements Full-page and Compact celebration pop-ups using Next.js and Material UI, featuring animations for engaging user interactions. The pop-ups are designed to be both web and mobile responsive, ensuring a seamless experience across devices.',
      techLogos: ['/htmllogo-removebg-preview.png','/css3logo.png','/reactlogo.png','/nodejs.png','/nextjs.png'],
      link: 'https://celebrationpopup.netlify.app/' // Add the link for the second project here
    },
    {
      image: '/portfolio.png',
      title: 'Personal Portfolio Site',
      description: 'This portfolio showcases a diverse range of web development projects, each designed with a focus on responsive layouts, clean code, and user-friendly interfaces. With an emphasis on both front-end and back-end development, it demonstrates the ability to create dynamic, visually appealing websites that offer seamless user experiences. The projects reflect a strong foundation in modern web technologies and an eye for detail in design.',
      techLogos: ['/htmllogo-removebg-preview.png','/css3logo.png','/reactlogo.png','/nodejs.png'],
      link: 'https://master--weatherlookingwebsite.netlify.app/' // Add the link for the second project here
    },
    {
      image: '/blood5.jpg',
      title: 'Weather Checker Site',
      description: 'A React-based web application that fetches and displays real-time weather data using a weather API. The app allows users to search for weather updates by city, providing details such as temperature, humidity, and wind speed. This project demonstrates my skills in working with APIs, React components, and managing state for dynamic data updates.',
      techLogos: ['/htmllogo-removebg-preview.png','/css3logo.png','/reactlogo.png','/nodejs.png'],
      link: 'https://master--weatherlookingwebsite.netlify.app/' // Add the link for the second project here
    },

    
    
    {
      image: '/videomeet.jpg',
      title: 'Video Calling Platform Using WebRTC',
      description: 'Developed a video calling meeting app using WebRTC and Python Django, enabling instructors to schedule meetings and users to view and join them. The app leverages real-time communication features to facilitate seamless video interactions.',
      techLogos: ['/python-logo.png','/django.png','/webrtc.png','/htmllogo-removebg-preview.png','/css3logo.png','/bootstrap.png'],
       link: ''
    },
    // Add more projects as necessary
  ];

  return (
    <section id="work" className="projects-section">
      <h2>Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techLogos={project.techLogos}
            link={project.link} // Pass the link to the ProjectCard
            reverse={index % 2 === 1} // If index is odd, apply reverse layout
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
