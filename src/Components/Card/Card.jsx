import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = ({ image, heading}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card">
        <img src={image} alt="" />
        <span style = {{color: darkMode? 'orange': ''}}>{heading}</span>
    </div>
  )
}

export default Card