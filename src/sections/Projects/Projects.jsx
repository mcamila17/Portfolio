import styles from './ProjectsStyles.module.css'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import ProjectsCards from '../../common/ProjectsCards'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Proyectos</h1>
      <div className={styles.proyectsContainer}>
        <div className={styles.middleContainer}>
          <ProjectsCards
          src={project1}
          link={'https://github.com/mcamila17/Proyect-LittleLemon.git'}
          h3={"Little Lemon"}
          p={"Sitio web para un restaurante utilizando React, JavaScript, HTML y CSS. El sitio incluye una página de reservas con datepickers y alertas, diseñado para ofrecer una experiencia de usuario fluida y moderna."}/>
          <ProjectsCards
          src={project2} 
          link={'https://github.com/mcamila17/BlogDeCafe.git'}
          h3={"BlogDeCafe"}
          p={"Desarrollé un sitio web utilizando HTML y CSS. El sitio incluye una página de inicio, una sección de proyectos, una biografía y una página de contacto, con un diseño limpio, responsivo y estéticamente agradable."}/>
        </div>
        <div className={styles.middleContainer}>
          <ProjectsCards
          src={project3}
          link={'https://github.com/mcamila17/-shell-eco-marathon.git'}
          h3={"Shell Eco-Marathon"}
          p={"Dentro de un equipo de estudiantes de mecatrónica que construye un vehículo eléctrico para la Shell Eco-Marathon. Utilicé comunicación en tiempo real con bases de datos en la nube para autenticación y visualización de datos."}/>
          <ProjectsCards
          src={project4}
          link={'https://github.com/mcamila17/Netflix-clone.git'}
          h3={"Netflix Clone"}
          p={"Desarrollé un clon de Netflix con React, implementando navegación por categorías, reproducción de videos y una interfaz moderna. Integré una API para obtener datos en tiempo real sobre películas y series, asegurando una experiencia similar a la original."}/>
        </div>
      </div>
    </section>
  )
}

export default Projects
