import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import Resume from './Resume.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Mahendra</div>
            <Toggle/>
        </div>
        <div className="n-mid">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true}>
                        <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                        <li>About me</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
        <div className="n-right">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
                <button className="button n-button">Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar