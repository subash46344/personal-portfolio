import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ResumeStyle.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="resume" className="resume_container">
      <div className="resume_heading" data-aos="fade-up">
        <h2>Resume</h2>
        <p className="resume_heading_line"></p>
        <p className="resume_heading_paragraph">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="resume_sub_container">
        <div className="resume_sub_container_card" data-aos="fade-right">
          <h2 className="heading">Education</h2>
          <div className="resume_content">
            <h3>BACHELOR OF ENGINEERING</h3>
            <span>2020 - 2024</span>
            <p style={{ marginTop: "10px", fontSize: "25px" }}>
              <i>IES College of Technology, Bhopal</i>
            </p>
            <p className="education_paragraph">
              During my B.Tech in Electrical and Electronics Engineering, I
              developed a strong foundation in both theoretical and practical
              aspects of the field. The coursework included subjects such as
              electrical circuits, control systems, power electronics,
              microprocessors, and embedded systems.
            </p>
          </div>
          <div className="resume_content">
            <h3>INTERMEDIATE OF JAC</h3>
            <span>2018 - 2020</span>
            <p style={{ marginTop: "10px", fontSize: "25px" }}>
              <i>+2 High School Palounjia Birni, Giridih</i>
            </p>
            <p className="education_paragraph">
              Completed 12th under the JAC Board, focusing on core subjects such
              as Physics, Chemistry, Mathematics, and Computer Science. This
              period laid the groundwork for my analytical and problem-solving
              skills, which I further developed during my higher education.
            </p>
          </div>
        </div>
        <div className="resume_sub_container_card" data-aos="fade-left">
          <h2 className="heading">Professional Experience</h2>
          <div className="resume_content">
            <h3>FRONTEND DEVELOPER SPECIALIST</h3>
            <span>2024 - Present</span>
            <p style={{ marginTop: "10px", fontSize: "25px" }}>
              <i>Experion, on Frontend Development, Web Development</i>
            </p>
            <ul>
              <li>
                Developed dynamic and responsive user interfaces using React JS.
              </li>
              <li>
                Collaborated with the team to enhance project development
                efficiency using GitLab.
              </li>
              <li>
                Participated in code reviews and contributed to the improvement
                of the codebase.
              </li>
              <li>
                Worked closely with designers and backend developers to
                integrate frontend components.
              </li>
              <li>
                Provided support in troubleshooting and resolving bugs to
                ensure smooth application performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
