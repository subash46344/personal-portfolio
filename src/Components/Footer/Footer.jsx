import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <p>
        © Copyright <strong>DevFolio</strong> All Rights Reserved
      </p>
      <div className="social_icon">
        <a href="https://twitter.com/Subash7492" target="_blank" class="fa fa-twitter"></a>
        <a href="https://linkedin.com/in/subashpandit" target="_blank" class="fa fa-linkedin"></a>
        <a href="https://www.facebook.com/subash.pandit.7583" target="_blank" class="fa fa-facebook-f"></a>
        <a href="https://www.instagram.com/er_subash74/" target="_blank" class="fa fa-instagram"></a>
      </div>
      <p>Designed by @subash</p>
    </div>
  );
};

export default Footer;
