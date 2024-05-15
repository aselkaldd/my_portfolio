import profile from  '../img/profile.jpeg'
import contact from '../img/contact.jpeg'
import project from '../img/mb.jpg'
import skill from '../img/skill.jpeg'
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'
import 'vanilla-tilt/dist/vanilla-tilt'
import { useEffect, useRef, useState } from 'react'
import { useInView, InView} from "react-intersection-observer";




export default function HomePage() {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);


  return (
    <div className='home'>
      <Link to='/about-me' >
        <div className="card">
          <img className='card-image' src={profile} alt='profile pic' ></img>
        </div>
      </Link>

      <Link to='/skills'>
        <div className="card">
          <img className='card-image' src={skill} alt='skill pic' ></img>
        </div>
      </Link>


      <Link to='/project' >
        <div className="card">
          <img className='card-image' src={project} alt='project pic' ></img>
        </div>
      </Link> 
      
      <Link to='/contacts' >
        <div className="card">
          <img className='card-image' src={contact} alt='project pic' ></img>
        </div>
      </Link>

   
    </ div>
  )
}


