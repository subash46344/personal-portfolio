import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeStyle.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className='home_container' data-aos="fade-down">
      <h1>I'm Subash Pandit</h1>
      <p>Frontend Developer</p>
    </div>
  );
}

export default Home;
