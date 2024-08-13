import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavbarStyle.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar_sub_container">
        <div className="navbar_logo" data-aos="fade-right">
          <a href="#">DevFolio</a>
        </div>
        <ul className={`navbar_links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skill" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <div className="menu_btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
