import { Link } from "react-router-dom";
import profile from '../img/profile.jpeg'
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


export default function AboutMe() {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <div className="about">
      <div className="card-about">
        <img className='card-image' data-aos='fade-right' src={profile} alt='profile pic' ></img>
      </div>

        <div className="text">
        <h3 data-aos='fade-left'>Hello! My name is Asel, and I am a student at DCI (Digital Career Institute). My passion for programming has led me to study web development with a focus on frontend. Since the beginning of my journey in July of last year, I have been deeply immersed in HTML, CSS, and JavaScript, and I am currently actively mastering React. My next step is to delve into backend development, which I plan to dedicate myself to fully in the near future. I am ambitiously focused on advancing in the field of programming and am ready for new challenges and achievements.</h3>
        </div>
    </div>
  )
}
