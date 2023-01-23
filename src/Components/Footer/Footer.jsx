import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>yadav.mahendra2804@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.instagram.com/mahendra.yadav2842/">
                <Insta color='gray' size='3rem'/>
              </a>
              <a href="https://www.linkedin.com/in/mahendra-yadav-55189a248/">
                <LinkedIn color='gray' size='3rem'/>
              </a>
              <a href="https://github.com/mahendra-init">
                <Github color='gray' size='3rem'/>
              </a>
            </div>
            <span>Created by Mahendra Yadav</span>
        </div>
    </div>
  )
}

export default Footer