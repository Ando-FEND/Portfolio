import { useEffect, useState } from 'react'
import '../styles/navbar.scss'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    useEffect(()=>{
        const handleScroll = () => {
            
          
          /*console.log('Scrolling...')*/
            const sections = ['home', 'about', 'projects', 'contact']

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section)
                    }
                } /*else {console.log(`Section ${section} not found!`)
            }*/
            }
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])
  return (
    <div>
      <nav className={`navbar-container ${activeSection === 'home' ? 'hidden' : 'visible'}`}>
        <ul>
          <li><a href="#home" className={activeSection ==='home' ? 'active' : ''} >Home</a></li>
          <li><a href="#about" className={activeSection ==='about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" className={activeSection ==='projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection ==='contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
