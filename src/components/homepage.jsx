import React from 'react'
import '../styles/homepage.css'

const Homepage = () => {
    
  return (
    <div className='homepage-container'>
      <div>
        <h3>Antonio Brynildsen</h3>
        <p>Frontend Developer student @Nackademin</p>
        <p>Currently looking for LIA/Internship</p>
      </div>

      
      <div className='link-container'>
        <div className='a-links'>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        </div>
      </div>


      <div className='arrow-container'>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  )
}

export default Homepage
