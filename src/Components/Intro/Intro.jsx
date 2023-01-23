import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import Typewriter from 'typewriter-effect'

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white': ''}}>Hy! I Am
                </span>
                <span>
                    <Typewriter options={{
                        strings:["Mahendra Yadav", "Full Stack Web Developer"],
                        autoStart: true,
                        loop: true
                    }} />
                </span>
                <span>Fullstack Web Developer having strong passion of creating visually appealing and user-friendly websites and applications. I have a strong understanding of HTML, CSS, and JavaScript as well as about with popular framework such as ReactJS. I am constantly learning and staying up-to-date with the latest technology to bring the best solutions. I am a hardworking and dedicated professional who is always looking for new challenges and opportunities to showcase my skills.</span>
            </div>
            <div className="i-icons">
                <a href="https://github.com/mahendra-init">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/mahendra-yadav-55189a248/">
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/mahendra.yadav2842/">
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div className='floating-div' style={{top: '-5%', left: '60%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div className='floating-div' style={{top: '18.2rem', left: '3.8%'}}>
                <FloatingDiv image={thumbup} txt1='Problem' txt2='Solver'/>
            </div>
            <div className="blur" style={{ background: 'rgb(238 210 255)', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            <div className="blur" style={{ background: '#C1F5FF' }}></div>
        </div>
    </div>
  )
}

export default Intro