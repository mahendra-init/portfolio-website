import React from 'react'
import './Skills.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import Card from '../Card/Card';
import html from '../../pro_icons/html.png';
import css from '../../pro_icons/css.png';
import js from '../../pro_icons/js.png';
import mongodb from '../../pro_icons/mongodb.png';
import react from '../../pro_icons/react.png';
import node from '../../pro_icons/node.png';
import express from '../../pro_icons/express.png';
import tailwind from '../../pro_icons/tailwind.svg';
import c from '../../pro_icons/c.png';
import java from '../../pro_icons/java.png';
import python from '../../pro_icons/python.png';
import sql from '../../pro_icons/sql.png';
import git from '../../pro_icons/git.png';

const Skills = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="skills" id='Skills'>
    <div className="awesome">
        <span style = {{color: darkMode? 'white': ''}}>My <span>skills</span></span>
    </div>
    <div className="cards">
        <Card 
        image = {html}
        heading = {'HTML'}
        />
        <Card 
        image = {css}
        heading = {'CSS'}
        />
        <Card 
        image = {js}
        heading = {'JavaScript'}
        />
        <Card 
        image = {tailwind}
        heading = {'Tailwind'}
        />
        <Card
        image = {mongodb}
        heading = {'MongoDB'}
        />
        <Card
        image = {express}
        heading = {'Express'}
        />
        <Card
        image = {react}
        heading = {'React'}
        />
        <Card
        image = {node}
        heading = {'NodeJs'}
        />
        <Card
        image = {c}
        heading = {'C++'}
        />
        <Card
        image = {java}
        heading = {'Java'}
        />
        <Card
        image = {python}
        heading = {'Python'}
        />
        <Card
        image = {sql}
        heading = {'SQL'}
        />
        <Card
        image = {git}
        heading = {'Git'}
        />
        
    </div>
    </div>
  )
}

export default Skills