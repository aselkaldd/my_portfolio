import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiNetflixFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";


export default function Project() {
  return (
    <div className="project">
      <h4>Project</h4>
      <div className="project-child">
        <div className="card-project">
          <div className="icon"><TiWeatherPartlySunny />
          </div>
          <p>Weather App</p>
        </div>

        
        <div className="card-project">
          <div className="icon"><RiNetflixFill />
          </div>
          <p>Jia clone</p>
        </div> 
        
        <div className="card-project">
          <div className="icon"><FaSpotify />
          </div>
          <p>Spotify clone</p>
        </div> 
        
        <div className="card-project">
          <div className="icon"><IoNewspaperOutline />
          </div>
          <p>Sport News</p>
        </div>
      </div>

    </div>
  )
}