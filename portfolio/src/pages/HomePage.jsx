import profile from "../img/profile.jpeg";
import contact from "../img/contact.jpeg";
import project from "../img/mb.jpg";
import skill from "../img/skill.jpeg";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import "vanilla-tilt/dist/vanilla-tilt";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import style from "./home.module.css";

export default function HomePage() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div className="home">
      <Link to="/about-me">
        <div className="card">
          <img className="card-image" src={profile} alt="profile pic"></img>
        </div>
      </Link>

      <Link to="/skills">
        <div className="card">
          <img className="card-image" src={skill} alt="skill pic"></img>
        </div>

        <div className={style.sliderContainer}>
          <div ref={slider} className={style.slider}>
            <p ref={firstText}>
              about me <span>skill</span> project <span>contact</span>{" "}
            </p>
            <p ref={secondText}>
              about me <span>skill</span> project <span>contact</span>
            </p>
          </div>
        </div>
      </Link>

      <Link to="/project">
        <div className="card">
          <img className="card-image" src={project} alt="project pic"></img>
        </div>
      </Link>

      <Link to="/contacts">
        <div className="card">
          <img className="card-image" src={contact} alt="project pic"></img>
        </div>
      </Link>
    </div>
  );
}
