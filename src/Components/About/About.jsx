import React from 'react'
import './About.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const About = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="about" id='About'>
      <span style = {{color: darkMode? 'white': ''}}>About <span style={{color: 'var(--orange)'}}>Me</span></span>
      <span>Hi! My name is Mahendra Yadav and I am a web developer with a passion for building intuitive and visually appealing websites. I have a strong foundation in HTML, CSS, and JavaScript, and am experienced in using modern web development frameworks such as React and Next.
In my previous work experience, I have had the opportunity to collaborate with cross-functional teams to design and develop websites for a variety of clients. I am skilled in the full web development life cycle, from gathering requirements and designing wireframes, to writing clean and efficient code, to testing and deploying the final product.
I am constantly seeking to improve my skills and stay up to date with the latest web development technologies and trends. In my free time, I enjoy participating in online coding challenges and tinkering with personal projects to expand my knowledge and capabilities.
I am excited to use my skills and experience to create impactful and user-friendly websites that help businesses and organizations achieve their goals.</span>
    </div>
  )
}

export default About