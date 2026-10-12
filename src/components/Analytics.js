import React from 'react';
import Reveal from './Reveal';

const groups = [
  {
    title: 'Quality & testing',
    skills: ['Selenium', 'TestNG', 'JMeter', 'Postman', 'Jira'],
  },
  {
    title: 'Development',
    skills: [
      'Python',
      'Django',
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'PHP',
      'Java',
      'JSON',
    ],
  },
  {
    title: 'UI & design',
    skills: ['Figma', 'Bootstrap'],
  },
  {
    title: 'Software Support',
    skills: ['Troubleshooting', 'User support', 'Issue documentation', 'Fix validation'],
  },
  {
    title: 'Ways of working',
    skills: ['Responsive UI', 'API validation', 'Test automation'],
  },
];

const Analytics = () => (
  <section className="expertise-section" id="expertise">
    <div className="section expertise-layout">
      <Reveal className="expertise-copy">
        <p className="eyebrow">Tools I work with</p>
        <h2 className="section-title">
          A versatile
          <br />
          toolkit.
        </h2>
        <p className="section-intro">
          Testing and development skills that help move a product from idea to
          dependable release.
        </p>
      </Reveal>

      <div className="skill-groups">
        {groups.map((group, index) => (
          <Reveal
            as="article"
            className="skill-group"
            delay={index * 80}
            key={group.title}
          >
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Analytics;