import React from 'react'
import Homepage from '../components/homepage'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
const Home = () => {
  return (
    <div>
      <Homepage id="home"></Homepage>
      <About id="about"></About>
      <Projects id="projects"></Projects>
      <Contact id="contact"></Contact>
    </div>
  )
}

export default Home
