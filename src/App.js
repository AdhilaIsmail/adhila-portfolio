import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
