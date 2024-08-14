import Sport from "../../img/sportnews.PNG";
import Jira from "../../img/jira.PNG";
import Dastify from "../../img/dastify.PNG";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import project from "./project.module.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className={project.project}>
      <div className={project.header}>
        <div>
          <button onClick={handleBackClick} className={project.button}>
            <p>Back</p>
          </button>
        </div>
        <h4>Project</h4>
      </div>

      <div className={project.projectchild} data-aos="fade-up">
        <div className={project.card} data-aos="fade-up" width="700px">
          <a
            href="https://github.com/aselkaldd/sport_news"
            target="_blank"
            rel="Sport News"
          >
            {" "}
            <img src={Sport} data-aos="zoom-in" />
          </a>
          <p>Sport News</p>
        </div>

        <div className={project.card} data-aos="fade-up" width="700px">
          <a
            href="https://github.com/aselkaldd/jira-clone"
            target="_blank"
            rel="Jira"
          >
            {" "}
            <img src={Jira} data-aos="zoom-in" />
          </a>

          <p>Jira clone</p>
        </div>

        <div className={project.card} data-aos="fade-up" width="700px">
          <a
            href="https://dastify-navy.vercel.app/"
            target="_blank"
            rel="Dastify"
          >
            {" "}
            <img src={Dastify} data-aos="zoom-in" />
          </a>

          <p>Spotify clone</p>
        </div>
      </div>
    </div>
  );
}
