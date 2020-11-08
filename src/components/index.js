import '../assets/css/App.css';

import Navbar from "./navbar.js"
import Welcome from "./welcome.js"
import About from "./about.js"
import Experience from "./experience.js"
import Education from "./education.js"
import Projects from "./projects.js"
import MoreInfo from "./more.js"
import Contact from "./contact.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="flex w-full justify-center">
        <div class="lg:w-3/4">
          <Welcome/>
          <About/>
          <Experience/>
          <Education/>
          <Projects/>
          <MoreInfo/>
          <Contact/>
          <p class="text-grey text-center mb-8">Copyright @ 2020 - Killian MER</p>
        </div>
      </div>
    </div>
  );
}

export default App;