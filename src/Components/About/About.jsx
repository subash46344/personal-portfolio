import React from "react";
import "./AboutStyle.css";
import AboutImg from "./../../Assets/profile1_img.jpg";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_sub_container">
        <div className="about_sub_container_card_left">
          <div className="about_sub_container_card_left_content" >
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
              <p className="intro_text">
                <strong>Location:</strong> <span>Mamura, Noida, Uttar Pradesh</span>{" "}
              </p>
            </div>
          </div>
          
           <h2 className="heading">Sumary</h2>
          <div className="resume_content">
            <h3>SUBASH PANDIT</h3>
            <p>
              <i>
                I have completed two website., where I developed dynamic and
                responsive user interfaces and collaborated with the team using
                GitLab for version control. I am skilled in using IDEs like
                Atom, VS Code, and Jupyter Notebook and eager to work on
                interesting projects and learn new things with a team.
              </i>
            </p>
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
            I have work experience on Frontend Development, Web Development.I
            worked on creating user interfaces with React JS and collaborated
            with my team using GitLab for version control.
          </p>
          <p className="about_text">
            I have built an money crest for handling loan
            applications, approvals, EMI Calculator, and repayment tracking. I also developed a
            e-commerce website that includes features like a product catalog,
            shopping cart, user authentication, and order management.
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
