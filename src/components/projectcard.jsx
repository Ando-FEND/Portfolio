import React from 'react'
import "../styles/projects.css"
const Projectcard = ({title, description, date, technologies, githubUrl, liveUrl}) => {
  return (
  <a href={githubUrl} target="_blank" rel="noopener norefferer" className='project-link'>
    <div className='project-box'>
        <div className='project-content'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className='project-meta'>
            <span className='date'>{date}</span>
            {technologies && (
                <div className='tecnhologies'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='tech-tag'>{tech}</span>
                    ))}
                </div>
            )}
        </div>
    </div>

  </a>
  )
}

export default Projectcard
