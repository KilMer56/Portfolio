import '../assets/css/App.css';

import Navbar from "./navbar.js"
import Welcome from "./welcome.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="flex w-full justify-center">
         <Welcome/>
      </div>
    </div>
  );
}

export default App;