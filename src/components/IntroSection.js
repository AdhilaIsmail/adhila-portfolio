import React from 'react';


const IntroSection = () => {
  return (
    <section id="home"  style={styles.introSection}>
      <h1 style={styles.title}>ADHILA ISMAIL</h1>
      <p style={styles.subtitle}>
        SOFTWARE TESTER, FRONT END & APP DEVELOPER.
      </p>
      <a href="https://main--cvadhilaismail.netlify.app/cv-adhilaismail.pdf" target="_blank" rel="noopener noreferrer" style={styles.resumeButton}>
        View Resume
      </a>
    </section>
  );
};

  const styles = {
    introSection: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(95, 61, 99, 0.026)', 
      color: '#fff',
      textAlign: 'center',
    },
    title: {
      fontSize: '8vw', // Responsive large text
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      margin: '0',
      color: '#fff',
    },
    subtitle: {
      fontSize: '1.5vw',
      marginTop: '20px',
      color: '#ccc',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    resumeButton: {
      marginTop: '30px',
      padding: '10px 30px',
      fontSize: '1.2vw',
      color: '#fff',
      backgroundColor: '#00c6ff',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    resumeButtonHover: {
      backgroundColor: '#007acc',
    },
    // Media Queries for Responsiveness
    '@media (max-width: 768px)': {
      title: {
        fontSize: '12vw', // Larger text for tablets
      },
      subtitle: {
        fontSize: '3vw', // Larger subtitle for tablets
      },
      resumeButton: {
        fontSize: '3vw',
      },
    },
    '@media (max-width: 480px)': {
      title: {
        fontSize: '15vw', // Even larger text for mobile
      },
      subtitle: {
        fontSize: '4vw', // Larger subtitle for mobile
      },
      resumeButton: {
        fontSize: '4vw',
      },
    },
  };
  
export default IntroSection;
