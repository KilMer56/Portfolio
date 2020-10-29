import logo from './logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p class="font-quicksand">Test font Quicksand</p>
        <p class="font-raleway">Test font Regular</p>
        <p class="font-raleway font-bold">Test font Bold</p>
      </header>
    </div>
  );
}

export default App;
