import React from 'react'
import '../styles/contact.css'
const Contact = ({id}) => {
  return (
    <section className='contact-container' id={id}>
     <div className='stuff'>
     <h1>Contact</h1> 
     <h3>Currently looking for an internship/LIA remote or onsite. Let's connect!</h3>
     <div className='contact-links-container'>
     <div className='socialmedia-link'>
     <p>Github</p>
     <p>LinkedIn</p>
     <p>Mail</p>
     </div>
     </div>
    </div>
    </section>
  )
}

export default Contact
