import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>

  
  );
}

export default App;