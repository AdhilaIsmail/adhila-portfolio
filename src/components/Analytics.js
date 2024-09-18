import React, { useState } from 'react';

const Analytics = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="expertise" 
      style={{ ...styles.container, ...(hoveredSkill !== null ? styles.containerHover : {}) }}
      onMouseEnter={() => setHoveredSkill(true)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <h2 style={styles.title}>Skills & Technologies</h2>
      <div style={styles.skillContainer}>
        {/* Skill bars with percentage display */}
        <Skill name="HTML" percentage={90} />
        <Skill name="CSS" percentage={85} />
        <Skill name="Bootstrap" percentage={80} />
        <Skill name="Python" percentage={75} />
        <Skill name="JSON" percentage={70} />
        <Skill name="JavaScript" percentage={80} />
        <Skill name="Django" percentage={75} />
        <Skill name="PHP" percentage={60} />
        <Skill name="Java" percentage={75} />
        <Skill name="Figma" percentage={60} />
        <Skill name="Selenium" percentage={85} />
        <Skill name="TestNG" percentage={60} />
        <Skill name="JMeter" percentage={50} />
        <Skill name="Postman" percentage={70} />
        <Skill name="React" percentage={60} />
      </div>
    </section>
  );
};

// Reusable Skill component to avoid repetition
const Skill = ({ name, percentage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={styles.skill}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.skillName}>{name}</span>
      <div style={styles.progress}>
        <div
          style={{
            ...styles.progressBar,
            width: isHovered ? `${percentage}%` : `${percentage}%`,
            transition: 'width 0.5s ease', // Smooth transition for the width change
          }}
        ></div>
      </div>
      <span style={styles.percentageLabel}>{percentage}%</span>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(180, 123, 181, 0.8)', // Plain purple background
    padding: '40px',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '1320px', // Set max width to control the container size
    width: '100%', // Allow full width on smaller screens
    margin: '0 auto', // Center the container
    borderRadius: '15px', // Add rounded corners
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow for bulge effect
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for bulge effect
  },
  containerHover: {
    transform: 'scale(1.05)', // Slight scale increase for the bulge effect
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  skillContainer: {
    width: '60%', // Reduced width from 80% to 60%
    margin: '0 auto',
  },
  skill: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  skillName: {
    flex: '1', // Keep the skill name aligned
    textAlign: 'left',
  },
  progress: {
    flex: '2', // Ensure all progress bars start from the same position
    height: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    margin: '0 20px',
    position: 'relative',
    overflow: 'hidden', // Hide overflowing progress bar parts
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#632863', // Blue gradient for progress bar
    borderRadius: '10px',
  },
  percentageLabel: {
    flex: '1', // Keep the percentage label aligned
    textAlign: 'right',
  },
};

export default Analytics;
