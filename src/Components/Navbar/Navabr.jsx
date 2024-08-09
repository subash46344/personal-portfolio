import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavbarStyle.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

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
    <nav className="navbar_container" data-aos="fade-down">
      <div className="navbar_sub_container">
        <div className="navbar_logo" data-aos="fade-right" data-aos-delay="200">
          <a href="#" onClick={() => handleScroll('home')}>DevFolio</a>
        </div>
        <ul className={`navbar_links ${menuOpen ? 'active' : ''}`} data-aos="fade-left" data-aos-delay="400">
          <li><a href="#" onClick={() => handleScroll('home')}>Home</a></li>
          <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
          <li><a href="#skill" onClick={() => handleScroll('skill')}>Skills</a></li>
          <li><a href="#resume" onClick={() => handleScroll('resume')}>Resume</a></li>
          <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
        </ul>
        <div className="menu_btn" onClick={toggleMenu} data-aos="fade-in" data-aos-delay="600">
          {menuOpen ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
