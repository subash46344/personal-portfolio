import React from "react";
import "./AboutStyle.css";
import AboutImg from "./../../Assets/profile1_img.jpg";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_sub_container">
        <div className="about_sub_container_card_left">
          <div className="about_sub_container_card_left_content">
            <img src={AboutImg} alt="" />
            <div className="about_sub_container_card_left_content_intro">
              <h className="intro_text">
                <strong>Name:</strong> <span>Subash Pandit</span>{" "}
              </h>
              <p className="intro_text">
                <strong>Profile:</strong> <span>React JS Developer</span>{" "}
              </p>
              <p className="intro_text">
                <strong>Email:</strong> <span>officialsubash74@gmail.com</span>{" "}
              </p>
              <p className="intro_text">
                <strong>Phone:</strong> <span>+91 7492074655</span>{" "}
              </p>
            </div>
          </div>
          <div className="about_sub_container_card_left_content_skills">
            <h2>Skills</h2>
            <div className="progress">
              <div className="skills_progress">
                <span>HTML</span>
                <i>100%</i>
              </div>
              <p className="progress_line"></p>
              <p className="progress_line2" style={{ width: "100%" }}></p>
            </div>
            <div className="progress">
              <div className="skills_progress">
                <span>CSS</span>
                <i>95%</i>
              </div>
              <p className="progress_line"></p>
              <p className="progress_line2" style={{ width: "95%" }}></p>
            </div>
            <div className="progress">
              <div className="skills_progress">
                <span>JavaScript</span>
                <i>90%</i>
              </div>
              <p className="progress_line"></p>
              <p className="progress_line2" style={{ width: "90%" }}></p>
            </div>
            <div className="progress">
              <div className="skills_progress">
                <span>React JS</span>
                <i>85%</i>
              </div>
              <p className="progress_line"></p>
              <p className="progress_line2" style={{ width: "85%" }}></p>
            </div>
          </div>
        </div>
        <div className="about_sub_container_card_right">
          <div className="about_heading">
            <h2>About me</h2>
            <div></div>
          </div>
          <p className="about_text">
            I am Subash Pandit, a dedicated and passionate software engineer
            with a solid foundation in JavaScript, React JS, HTML, and CSS. I
            hold a B.Tech in Electrical and Electronics Engineering from IES
            College of Technology, Bhopal, where I graduated with a CGPA of
            7.99. My educational journey has been marked by a consistent drive
            for excellence, evident from my performance in both 12th and 10th
            grades under the JAC Board.
          </p>
          <p className="about_text">
            I have experience working at NoteG Technology Pvt. Ltd., where I did
            a six-month internship. I worked on creating user interfaces with
            React JS and collaborated with my team using GitLab for version
            control.
          </p>
          <p className="about_text">
            I have built an e-commerce website that includes features like a
            product catalog, shopping cart, user authentication, and order
            management. I also developed a money loan management system for
            handling loan applications, approvals, and repayment tracking.
          </p>
          <p className="about_text">
            I enjoy working on interesting projects and learning new things with
            a team. I am excited to bring my skills to a team that values
            collaboration and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
