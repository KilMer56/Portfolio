import '../assets/css/App.css';

import Navbar from "./common/navbar.js"
import Welcome from "./welcome.js"
import About from "./about.js"
import Experience from "./experience.js"
import Education from "./education.js"
import Projects from "./projects.js"
import MoreInfo from "./more.js"
import Contact from "./contact.js"

import { Element } from 'react-scroll'

function App() {
  return (
    <div className="App w-full">
      <Navbar/>
      <div className="flex w-full justify-center">
        <div className="w-full px-8 lg:px-0 lg:w-3/4">
          <Welcome/>
          <Element name="about_me">
            <About/>
          </Element>
          <Element name="experience">
            <Experience/>
          </Element>
          <Element name="education">
            <Education/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="more_info">
            <MoreInfo/>
          </Element>
          <Element name="contact">
            <Contact/>
          </Element>
          <p className="text-grey text-center mb-8">Copyright @ 2020 - Killian MER</p>
        </div>
      </div>
    </div>
  );
}

export default App;