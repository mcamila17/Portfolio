import React from 'react'

function ProjectsCards({src, link, h3, p}) {
  return (
    <a href={link}>
          <img src={src} alt={`project ${h3}`} />
          <h3>{h3}</h3>
          <p>{p}</p>
        </a>
  )
}

export default ProjectsCards
