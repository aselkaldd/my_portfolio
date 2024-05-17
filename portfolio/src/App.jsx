import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/about/AboutMe';
import Skills from './pages/skill/Skills';
import Project from './pages/project/Project';
import Contacts from './pages/contact/Contacts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


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