import React from 'react';

const IntroSection = () => (
  <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow hero-eyebrow">
        Software quality <span /> Dubai, UAE
      </p>

      <h1 id="hero-title">
        Adhila
        <br />
        <span>Ismail.</span>
      </h1>

      <div
        className="role-window"
        aria-label="Software tester, software developer, QA and automation"
      >
        <div className="role-rotator" aria-hidden="true">
          <span>Software Tester</span>
          <span>Software Developer</span>
          <span>QA &amp; Automation</span>
          <span>Software Tester</span>
        </div>
      </div>

      <p className="hero-description">
        I build and test digital experiences with care—bringing thoughtful
        development and a quality-first mindset to every project.
      </p>

      <div className="hero-proof" aria-label="Areas of focus">
        <span>Test automation</span>
        <span>Frontend development</span>
        <span>API testing</span>
      </div>

      <div className="hero-actions">
        <a className="button button-primary" href="#work">
          Explore my work <span aria-hidden="true">↘</span>
        </a>
        <a
          className="resume-link"
          href="/CV_ADHILA%20ISMAIL.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View résumé <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div className="hero-portrait" aria-label="Portrait of Adhila Ismail">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <span className="orbit-beacon" />
      <span className="orbit-label orbit-label-api">API TESTING</span>
      <span className="orbit-label orbit-label-quality">QUALITY FIRST</span>
      <span className="orbit-label orbit-label-auto">AUTOMATION</span>

      <div className="portrait-frame">
        <img src="/profile.avif" alt="Adhila Ismail" />
        <div className="portrait-shine" />
      </div>

      <div className="portrait-tag portrait-tag-top">
        <b>01</b> / TEST WITH PURPOSE
      </div>
      <div className="portrait-tag portrait-tag-bottom">
        <b>02</b> / BUILD WITH CARE
      </div>
    </div>

    <div className="availability">
      <span className="availability-dot" /> Open to opportunities
    </div>

    <a className="scroll-cue" href="#about">
      Scroll to explore <span aria-hidden="true">↓</span>
    </a>

    <span className="hero-index">PORTFOLIO · 2026</span>
  </section>
);

export default IntroSection;