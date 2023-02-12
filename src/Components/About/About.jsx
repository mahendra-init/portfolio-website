import React from "react";
import "./About.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      <span style={{ color: darkMode ? "white" : "" }}>
        About <span style={{ color: "var(--orange)" }}>Me</span>
      </span>
      <span>
        I am a skilled and passionate Full Stack Web Developer currently in my
        3rd year of B-Tech in information technology at Atharva College of
        Engineering in Malad. I have used these technologies extensively to
        build a variety of websites and applications. The MERN stack is
        particularly useful for building full-stack web applications. Tailwind
        CSS is a powerful utility-first CSS framework that helps to make my CSS
        more maintainable and efficient. Firebase is a great tool for building
        scalable, real-time web and mobile applications. As a leader of my team
        for the past three academic projects, I have developed a deep
        understanding of team management and project planning 💼. I am confident
        in my ability to apply my knowledge and skills to build something truly
        great during a hackathon 💻. With a passion for technology and a drive
        to succeed 🚀, I am a valuable asset to any team and am sure to make a
        significant impact in the world of web development ✨.
      </span>
    </div>
  );
};

export default About;
