import React from 'react'
import '../styles/homepage.css'

const Homepage = ({id}) => {
    
  return (
    <section id={id} className='homepage-container'>
      <div className='intro-div'>
        <h3>ANTONIO BRYNILDSEN</h3>
        <p>Frontend Developer student @Nackademin</p>
        <p>Currently looking for LIA/Internship</p>
      </div>
      
      
      <div className='link-container'>
        <div className='a-links'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </div>
      </div>
    </section>



  )
}

export default Homepage
