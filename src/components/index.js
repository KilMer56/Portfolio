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
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App w-full">
      <Navbar/>
      <div className="flex w-full justify-center">
        <div className="w-full px-8 lg:px-0 lg:w-3/4">
          <Welcome/>
          <Element name="about_me">
            <Fade><About/></Fade>
          </Element>
          <Element name="experience">
            <Fade><Experience/></Fade>
          </Element>
          <Element name="education">
            <Fade><Education/></Fade>
          </Element>
          <Element name="projects">
            <Fade><Projects/></Fade>
          </Element>
          <Element name="more_info">
            <Fade><MoreInfo/></Fade>
          </Element>
          <Element name="contact">
            <Fade><Contact/></Fade>
          </Element>
          <p className="text-grey text-center mb-8">Copyright @ 2020 - Killian MER</p>
        </div>
      </div>
    </div>
  );
}

export default App;