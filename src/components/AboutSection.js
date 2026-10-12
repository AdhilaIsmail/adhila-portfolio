import React from 'react';
import Reveal from './Reveal';

const AboutSection = () => (
  <section className="section about-section" id="about">
    <Reveal>
      <p className="eyebrow">A little about me</p>
      <h2 className="section-title">
        Quality in
        <br />
        every detail.
      </h2>
      <p className="section-intro">
        I’m Adhila, an MCA graduate with experience supporting web applications and developing with Python and Django. I also have experience with software testing, API validation, and documenting issues so teams can resolve them.
      </p>

      <div className="work-principles">
        <p><span>01</span> Build with care</p>
        <p><span>02</span> Test thoughtfully</p>
        <p><span>03</span> Keep learning</p>
      </div>
    </Reveal>

    <Reveal className="about-card" delay={120}>
      <span className="about-card-mark" aria-hidden="true">A.</span>
      <p>
        I bring together Python and Django development, practical software testing, and hands-on application support to help make digital products reliable and easy to use.
      </p>
      <div className="about-card-line">
        <span /> SOFTWARE TESTER &amp; DEVELOPER
      </div>
    </Reveal>

    <div className="skills-ticker" aria-label="Areas of focus">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {['Software testing', 'Frontend development', 'API testing', 'Test automation'].map((skill) => (
              <span key={`${copy}-${skill}`}>
                {skill} <i aria-hidden="true">✳</i>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;