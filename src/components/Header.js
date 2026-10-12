import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        onClick={closeMenu}
        aria-label="Adhila Ismail, home"
      >
        ADHILA<span>®</span>
      </a>

      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`site-nav${menuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#expertise" onClick={closeMenu}>Expertise</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a className="header-cta" href="#contact">
        Let’s talk <span>↗</span>
      </a>
    </header>
  );
};

export default Header;