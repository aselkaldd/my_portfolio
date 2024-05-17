
import Sport from '../../img/sportnews.PNG'
import Jira from '../../img/jira.PNG'
import Dastify from '../../img/dastify.PNG'
import AOS from 'aos';
import 'aos/dist/aos.css'
import project from './project.module.css'
import { useEffect } from 'react';



export default function Project() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="project" >
      <h4>Project</h4>
      <div className={project.projectchild} data-aos="fade-up">

        <div className={project.card} data-aos="fade-up" width='700px'>
          <a href='' target='_blank' ><img src={Sport} data-aos="zoom-in" /></a>
          <p>Weather App</p>

        </div>

        <div className={project.card} data-aos="fade-up" width='700px'>
          <a href='https://github.com/PatrickZablocki/Jira_clone' target='_blank' >    <img src={Jira} data-aos="zoom-in" />
          </a>

          <p>Jira clone</p>
        </div>

        <div className={project.card} data-aos="fade-up" width='700px'>
          <a href='https://github.com/saiddlkc/dastify-klonen' target='_blank' >  <img src={Dastify} data-aos="zoom-in" /></a>

          <p>Spotify clone</p>
        </div>

      </div>
    </div>


  )
}

