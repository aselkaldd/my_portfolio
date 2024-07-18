import {
  FaLinux,
  FaGitAlt,
  FaNpm,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiSocketdotio,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import FramerMagnetic from "../FramerMagnetic";
import skill from "./skill.module.css";

export default function Skills() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className={skill.skill}>
      <div className={skill.header}>
        <div>
          <button onClick={handleBackClick} className={skill.button}>
            <p>Back</p>
          </button>
        </div>
        <h4>My Skills</h4>
      </div>

      <div className={skill.skillsvg}>
        <FramerMagnetic>
          <FaHtml5 className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaCss3Alt className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiSass className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaReact className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiJavascript className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaNodeJs className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiMongodb className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaBootstrap className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiPostman className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaLinux className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaGitAlt className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaGithub className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <FaNpm className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiSocketdotio className={skill.icon} />
        </FramerMagnetic>

        <FramerMagnetic>
          <SiTailwindcss className={skill.icon} />
        </FramerMagnetic>
      </div>
    </div>
  );
}
