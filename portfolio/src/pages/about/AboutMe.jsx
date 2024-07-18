import profile from "../../img/profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FramerMagnetic from "../FramerMagnetic";
import Resume from "../../img/Resume.pdf";
import styles from "./about.module.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.aboutme}>
      <div className={styles.header}>
        <div>
          <button onClick={handleBackClick} className={styles.button}>
            <p>Back</p>
          </button>
        </div>
        <h4>About me</h4>
      </div>

      <div className={styles.about}>
        <div className="card-about">
          <img
            className="card-image"
            data-aos="fade-right"
            src={profile}
            alt="profile pic"
          ></img>
        </div>

        <div className={styles.text} data-aos="fade-left">
          <h3 data-aos="fade-left">
            Hello! My name is Asel, and I am a recent graduate of DCI (Digital
            Career Institute). My passion for programming has led me to study
            web development with a focus on both frontend and backend
            technologies. Since the beginning of my journey in July of last
            year, I have been deeply immersed in HTML, CSS, and JavaScript, and
            I have mastered React. I have also dedicated myself to backend
            development, gaining expertise in REST API development with Express
            and database fundamentals with MongoDB. Currently, I am in the
            practicum phase, applying my skills in a real-world setting.
          </h3>

          <FramerMagnetic>
            <a href={Resume} target="_blank" rel="noreferrer">
              <button type="submit" className={styles.button}>
                <p>Download CV</p>
              </button>
            </a>
          </FramerMagnetic>
        </div>
      </div>
    </div>
  );
}
