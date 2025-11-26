import Projectcard from '../components/projectcard.jsx'
import "../styles/homepage.scss"
import "../styles/about.scss"
import "../styles/contact.scss"
import "../styles/projects.scss"
import Arr from '../components/arr.jsx'
const Home = () => {
  const projectsData = [
    {
      title:"Quiz application",
      description:"My first application made with javascript",
      date:"Dec.2024 / Design & Dev",
      githubUrl:"https://quiz-uppgift.vercel.app/"
    },
    {
      title:"Tamagochi application",
      description:"A tamagochi game where you can feed, play and take a nap",
      date:"Apr.2025 / Design & Dev",
      githubUrl:""
    },
        {
      title:"Tamagochi application",
      description:"A tamagochi game where you can feed, play and take a nap",
      date:"Apr.2025 / Design & Dev",
      githubUrl:""
    },
        {
      title:"Tamagochi application",
      description:"A tamagochi game where you can feed, play and take a nap",
      date:"Apr.2025 / Design & Dev",
      githubUrl:""
    },
        {
      title:"Tamagochi application",
      description:"A tamagochi game where you can feed, play and take a nap",
      date:"Apr.2025 / Design & Dev",
      githubUrl:""
    }
  ]
  return (
    <div className='portfolio-wrapper'>

      <section id="home" className='homepage-container'>
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


      <div className='about-container'>
        <section id="about">
          <h1>About</h1>
          <div className='container'>
            <div className='texrd'>
            <p>
              Hi, my name is Antonio Brynildsen, better known online as Ando.

I am a 27-year-old Frontend Developer student at Nackademins Folkhögskola, currently looking for an LIA position, and this is the first version of my portfolio. 
<br></br>
<br></br>

I’ve always been interested in technology. I built my first PC at the age of 14 with the money I had saved from painting fences and picking up trash that summer. As you can probably guess, I used that PC for many things—gaming, (trying to) make music, and more. Nowadays, I mostly use my PC to learn coding.
<br></br>
<br></br>
My other interest is food! Since I was 18, I’ve always worked with something involving food—cafés, bars, restaurants, you name it. But after working in that industry on and off for almost 10 years, I’ve really gotten into coding and enjoyed it a lot so far.
<br></br>
<br></br>
I enjoy creating simple and clean websites, Hopefully this portfolio represents what I’m striving to become: a web developer who creates minimalistic yet user-friendly websites and applications.
            </p>         
            </div>
          </div>
        </section>
      </div>


      <div className='project-container'>
      <section id="projects" className='projects-section'>
        <h1>Projects</h1>
        <div className='projects-container'>
          {projectsData.map((project, index) => (
            <Projectcard
              key={index}
              title={project.title}
              description={project.description}
              date={project.date}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
              >
            </Projectcard>
          ))}
        </div>
      </section>
      </div>
      
      <section className='contact-container' id="contact">
        <div className='stuff'>
          <h1>Contact</h1>
          <h3>Currently looking for an internship/LIA remote or on site</h3>
          <div className='contact-links-container'>
            <div className='socialmedia-link'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ando-FEND">Github</a>
              <a target="_blank" rel="noopener noreferrer" href="">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="">Mail</a>
            </div>
          </div>
        </div>
      </section>
      <Arr></Arr>

    </div>
  )
}
export default Home
