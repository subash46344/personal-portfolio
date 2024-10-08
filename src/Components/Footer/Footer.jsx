import React, { useEffect } from "react";
import "./FooterStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Animation occurs only once while scrolling down
    });
  }, []);

  return (
    <div className="footer_container" data-aos="fade-up">
      <p>
        © Copyright <strong>DevFolio</strong> All Rights Reserved
      </p>
      <div className="social_icon" data-aos="fade-up" data-aos-delay="200">
        <a href="https://twitter.com/Subash7492" target="_blank" className="fa fa-twitter"></a>
        <a href="https://linkedin.com/in/subashpandit" target="_blank" className="fa fa-linkedin"></a>
        <a href="https://www.facebook.com/subash.pandit.7583" target="_blank" className="fa fa-facebook-f"></a>
        <a href="https://www.instagram.com/er_subash74/" target="_blank" className="fa fa-instagram"></a>
      </div>
      <p data-aos="fade-up" data-aos-delay="400">Designed by @subash</p>
    </div>
  );
};

export default Footer;
