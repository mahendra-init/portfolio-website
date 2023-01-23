import React from 'react'
import './Projects.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="projects" id='Projects'>
      <span style = {{color: darkMode? 'white': ''}}>Recent <span style={{color: 'var(--orange)'}}>Projects</span></span>

      <div className="p-cards">
        
        <div className="p-card">
          <div className="p-card-left">
            <img src={Sidebar} alt="" />
          </div>

          <div className="p-card-right">
            <span>Sidebar</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo voluptatibus maiores esse impedit ipsa asperiores deleniti molestiae tempora, nobis adipisci. Est eveniet cum velit id eius quaerat sit enim.</span>
            <div className="p-buttons">
              <button className="button">Demo</button>
              <button className="button">Code</button>
            </div>
          </div>

        </div>
        <div className="p-card1">
          <div className="p-card-left">
            <img src={Ecommerce} alt="" />
          </div>

          <div className="p-card-right">
            <span>Ecommerce</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo voluptatibus maiores esse impedit ipsa asperiores deleniti molestiae tempora, nobis adipisci. Est eveniet cum velit id eius quaerat sit enim.</span>
            <div className="p-buttons">
              <button className="button">Demo</button>
              <button className="button">Code</button>
            </div>
          </div>

        </div>
        <div className="p-card">
          <div className="p-card-left">
            <img src={HOC} alt="" />
          </div>

          <div className="p-card-right">
            <span>HOC</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo voluptatibus maiores esse impedit ipsa asperiores deleniti molestiae tempora, nobis adipisci. Est eveniet cum velit id eius quaerat sit enim.</span>
            <div className="p-buttons">
              <button className="button">Demo</button>
              <button className="button">Code</button>
            </div>
          </div>

        </div>
        
        <div className="p-card1">
          <div className="p-card-left">
            <img src={MusicApp} alt="" />
          </div>

          <div className="p-card-right">
            <span>MusicApp</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo voluptatibus maiores esse impedit ipsa asperiores deleniti molestiae tempora, nobis adipisci. Est eveniet cum velit id eius quaerat sit enim.</span>
            <div className="p-buttons">
              <button className="button">Demo</button>
              <button className="button">Code</button>
            </div>
          </div>

        </div>
      </div>
     
    </div>
  )
}

export default Projects