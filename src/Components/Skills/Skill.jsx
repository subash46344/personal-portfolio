import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillStyle.css";
import HtmlIcon from "./../../Assets/html.png";
import CssIcon from "./../../Assets/css.png";
import JavascriptIcon from "./../../Assets/js.png";
import ReactIcon from "./../../Assets/react.png";
import ReduxIcon from "./../../Assets/redux.png";
import NodeJsIcon from "./../../Assets/nodejs.png";
import GitHubIcon from "./../../Assets/github.png";
import GitLabIcon from "./../../Assets/gitlab.png";

const products = [
  {
    icon: HtmlIcon,
    heading: "HTML5",
    paragraph:
      "HTML is the standard language used to create and design webpages.",
  },
  {
    icon: CssIcon,
    heading: "CSS3",
    paragraph:
      "CSS is a stylesheet language used to control the appearance and layout of HTML documents.",
  },
  {
    icon: JavascriptIcon,
    heading: "JavaScript",
    paragraph:
      "JavaScript is a programming language it is used for creating dynamic and interactive content on websites",
  },
  {
    icon: ReactIcon,
    heading: "React JS",
    paragraph:
      "React JS is a popular JavaScript library used for building user interfaces, particularly for single-page applications",
  },
  {
    icon: ReduxIcon,
    heading: "Redux",
    paragraph:
      "Redux is a predictable state container for JavaScript applications, often used for state management. ",
  },
  {
    icon: NodeJsIcon,
    heading: "Node JS",
    paragraph:
      "Node.js is a runtime environment that allows you to run JavaScript code on the server side. It's built on Chrome's V8 JavaScript engine.",
  },
  {
    icon: GitHubIcon,
    heading: "GitHub",
    paragraph:
      "GitHub is a web-based platform that uses Git for version control. It allows developers to collaborate on projects, track changes.",
  },
  {
    icon: GitLabIcon,
    heading: "GitLab",
    paragraph:
      "GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager with features like issue tracking.",
  },
];

function Skill() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div id="skill" className="skill_container">
      <div className="resume_heading">
        <h2>My Skills</h2>
        <p className="resume_heading_line"></p>
        <p className="resume_heading_paragraph">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="skill_sub_container">
        {products.map((item, index) => (
          <div key={index} className="skill_card"  data-aos="zoom-in">
            <img src={item.icon} alt={item.heading} />
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
