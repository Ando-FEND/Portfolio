import React from 'react'
import '../styles/about.css'
import mushroomImg from "../assets/mushroom.jpeg"
import scoglioImg from "../assets/scoglio.jpeg"
import pizzaImg from "../assets/pizza.jpeg"
import salsicciaImg from "../assets/salsiccia.jpeg"
const About = ({id}) => {
  return (
    <div className='about-container'>
    <section id={id}>
    
    <h1>About</h1>

    <img src="" alt="" />
    <div className='container'>
    <div className='texrd'>
    <h2>Antonio Brynildsen, Avid learner and (soon to be) web developer</h2>

    <hr />
    
    <p>Hi my name is Antonio Brynildsen or better known online as Ando.</p>

    <p>I am a 27 year old front end developer student at nackademin that is currently looking for a LIA and this is the first version of my portfolio.
    </p>
    <p>I've always been interested in technology building my first own PC at 14 with the money i saved up from painting fences and picking up trash from that summer.
    And as you can probably guess ive used that pc to do many things, game,(tried) to create music etc but now im mostly using my PC to learn coding.
    </p>
    <p>My other intrest is food! since i was 18 ive always been working with something involving food, cafés bars restaurants you name it. but after working in that industry on and off for almost 10 years (yikes im getting old) i've really been getting into coding and enjoyed it alot thusfar.
    </p>
    <p>I enjoy making simple and clean websites but latley ive been getting really inspired by people on LinkedIn such as adam who makes simple but great websites with alot of thought on IX/UX hopefully this portfolio is representative of what im trying to become, a webdeveloper who uses minimalistic but yet interesting gimmicks</p>
</div>

<div className='carousel'>
    <h2>Here are some pictures of food ive made!</h2>
    <hr />
    <div>
        <img src={mushroomImg} alt="" className='gallery-image'/>
        <img src={scoglioImg} alt="" className='gallery-image' />
        <img src={pizzaImg} alt="" className='gallery-image' />
        <img src={salsicciaImg} alt="" className='gallery-image' />
    </div>

</div>
</div>
    </section>
      
    </div>
    
  )
}

export default About
