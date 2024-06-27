import React from 'react'
import styles from './SkillsStyles.module.css'
import boostrap from '../../assets/logoboostrap.png'
import css from '../../assets/logocss.png'
import figma from '../../assets/logoFigma.png'
import git from '../../assets/logogit.png'
import firebase from '../../assets/logoFireBase.png'
import html from '../../assets/logoHTML.png'
import javascript from '../../assets/logoJS.png'
import php from '../../assets/logophp.png'
import react from '../../assets/logoReact.png'
import sass from '../../assets/logosass.png'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Habilidades</h1>
      <div className={styles.skillsContainer}>
        <img src={html} alt=" logo html" />
        <img src={css} alt=" logo css" />
        <img src={javascript} alt=" logo javascript" />
        <img src={react} alt=" logo react" />
        <img src={php} alt=" logo php" />
        <img src={git} alt=" logo git" />
        <img src={sass} alt=" logo sass" />
        <img src={boostrap} alt=" logo boostrap" />
        <img src={firebase} alt=" logo firebase" />
        <img src={figma} alt=" logo figma" />
      </div>
    </section>
  )
}

export default Skills
