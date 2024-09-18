import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import Analytics from './components/Analytics';
import Footer from './components/Footer';



const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <IntroSection />
      <ProjectsSection />
      <Analytics />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("/bg15.jpg")', // Use your image path here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // To keep it fixed as you scroll
    minHeight: '100vh', 
    width: '100%',
  },
};

export default App;
