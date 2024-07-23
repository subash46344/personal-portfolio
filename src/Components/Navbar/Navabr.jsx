import React, { useState } from 'react';
import './NavbarStyle.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar_sub_container">
        <div className="navbar_logo">
          <a href="#" onClick={() => handleScroll('home')}>DevFolio</a>
        </div>
        <ul className={`navbar_links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={() => handleScroll('home')}>Home</a></li>
          <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
          <li><a href="#resume" onClick={() => handleScroll('resume')}>Resume</a></li>
          <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
        </ul>
        <div className="menu_btn" onClick={toggleMenu}>
          {menuOpen ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
