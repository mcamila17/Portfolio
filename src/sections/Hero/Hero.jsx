import styles from './HeroStyles.module.css'
import cartoon from '../../assets/cartoon.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import gitsun from '../../assets/github-light.svg'
import gitmoon from '../../assets/github-dark.svg'
import linksun from '../../assets/linkedin-light.svg'
import linkmoon from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv maria camila troncoso.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const gitIcon = theme === 'light' ? gitsun : gitmoon;
    const linkedinIcon = theme === 'light' ? linksun : linkmoon;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={cartoon} alt="profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
            Maria
            <br />
            Troncoso
        </h1>
        <h2>Front-end Developer - UX/UI Designer</h2>
        <span>
            <a href="https://github.com/mcamila17" target="_blank">
            <img src={gitIcon} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/maria-camila-troncoso-campos-9308001b8/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
            </a>
        </span>
        <a href={cv} download>
            <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
