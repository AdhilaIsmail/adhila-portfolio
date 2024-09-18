import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={styles.logoName}>AI</span>
      </div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>{'// home'}</a>
        <a href="#work" style={styles.navLink}>{'// work'}</a>
        <a href="#expertise" style={styles.navLink}>{'// expertise'}</a>
        <a href="#contact" style={styles.navLink}>{'// contact'}</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(17, 17, 17, 0.6)',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '600',
  },
  logoName: {
    color: '#7f2c85', // Custom light blue color for the name
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    transition: 'all 0.3s ease-in-out',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '400',
    marginLeft: '15px',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#00FFFF', // Light blue hover effect
  },
  // Media Queries
  '@media (max-width: 768px)': {
    header: {
      flexDirection: 'column',
      padding: '10px 20px',
    },
    nav: {
      width: '100%',
      justifyContent: 'center',
      marginTop: '10px',
    },
    navLink: {
      fontSize: '12px',
      marginLeft: '10px',
    },
    logo: {
      fontSize: '20px',
    },
  },
  '@media (max-width: 480px)': {
    header: {
      flexDirection: 'column',
      padding: '5px 10px',
    },
    nav: {
      width: '100%',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '5px',
    },
    navLink: {
      fontSize: '10px',
      marginLeft: '5px',
    },
    logo: {
      fontSize: '18px',
    },
  },
};

export default Header;
