import React from "react";
import "./ResumeStyle.css";

const Resume = () => {
  return (
    <div id="resume" className="resume_container">
      <div className="resume_heading">
        <h2>Resume</h2>
        <p className="resume_heading_line"></p>
        <p className="resume_heading_paragraph">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="resume_sub_container">
        <div className="resume_sub_container_card">
          <h2 className="heading">Sumary</h2>
          <div className="resume_content">
            <h3>SUBASH PANDIT</h3>
            <p>
              <i>
                I have completed a 6-month internship at NoteG Technology Pvt.
                Ltd., where I developed dynamic and responsive user interfaces
                and collaborated with the team using GitLab for version control.
                I am skilled in using IDEs like Atom, VS Code, and Jupyter
                Notebook and eager to work on interesting projects and learn new
                things with a team.
              </i>
            </p>
            <ul>
              <li>Mamura, Noida, Uttar Pradesh</li>
              <li>+91 7492074655</li>
              <li>officialsubash74@gmail.com</li>
            </ul>
          </div>
          <h2 className="heading" style={{ marginTop: "20px" }}>
            Education
          </h2>
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
              microprocessors, and embedded systems
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
        <div className="resume_sub_container_card">
          <h2 className="heading">Professional Experience</h2>
          <div className="resume_content">
            <h3>SOFTWARE ENGINEER SPECIALIST</h3>
            <span>2024 - Present</span>
            <p style={{ marginTop: "10px", fontSize: "25px" }}>
              <i>Experion, NoteG Technology Pvt. Ltd. (6-month Internship)</i>
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
                Provided support in trouble shooting and resolving bugs to
                ensure smooth application performance.
              </li>
            </ul>
          </div>
          <div className="resume_content">
            <h3>GRAPHIC DESIGN SPECIALIST</h3>
            <span>2022 - 2023</span>
            <p style={{ marginTop: "10px", fontSize: "25px" }}>
              <i>Stepping Stone Advertising, Noida, India</i>
            </p>
            <ul>
              <li>
                Developed numerous marketing programs (logos,
                brochures,infographics, presentations, and advertisements).
              </li>
              <li>
                Managed up to 5 projects or tasks at a given time while under
                pressure
              </li>
              <li>
                Recommended and consulted with clients on the most appropriate
                graphic design
              </li>
              <li>
                Created 4+ design presentations and proposals a month for
                clients and account managers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
