import logo from './assets/logo.svg';
import me from './assets/me.jpg'
import music from './assets/bgm.mp3'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a 
          href="https://github.com/BebeShen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img width={250} src={me} className="MyProfile" alt="Me"/>
        </a>
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
      </header>
      <body className="App-body">
      <div>
        <div class="marquee">
          <div class="marquee-text">James Arthur - Say you won't let go</div>
        </div>
      </div>
        <audio autoplay controls={true}>
          <source src={music} type="audio/mpeg"/>
        </audio>
      </body>
    </div>
  );
}

export default App;
