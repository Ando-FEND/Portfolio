import Projectcard from '../components/projectcard.jsx'
import "../styles/homepage.scss"
import "../styles/about.scss"
import "../styles/contact.scss"
import "../styles/projects.scss"
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
      title:"",
      description:"",
      date:"",
      githubUrl:""
    },
    {
      title:"",
      description:"",
      date:"",
      githubUrl:""
    },
    {
      title:"",
      description:"",
      date:"",
      githubUrl:""
    },  
  ]
  return (
    <div>

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
              <p>Hi my name is Antonio Brynildsen or better known online as Ando.</p>
              <p>I am a 27 year old Frontend developer student at Nackademins Folkhögskola that is currently looking for a LIA and this is the first version of my portfolio.</p>
              <p>I've always been interested in technology building my first own PC at 14 with the money i saved up from painting fences and picking up trash from that summer. And as you can probably guess ive used that pc to do many things, game,(tried) to create music etc but now im mostly using my PC to learn coding.</p>
              <p>My other intrest is food! Since i was 18 ive always been working with something involving food, cafés bars restaurants you name it. But after working in that industry on and off for almost 10 years i've really been getting into coding and enjoyed it alot thusfar.</p>
              <p>I enjoy making simple and clean websites and latley ive been getting really inspired by people on LinkedIn such as Adham Dannaway who makes simple but great websites with alot of focus on IX/UX hopefully this portfolio is representative of what im trying to become, a webdeveloper who creates minimalistic but userfriendly websites/applications</p>              
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
              <p>Github</p>
              <p>LinkedIn</p>
              <p>Mail</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
export default Home
