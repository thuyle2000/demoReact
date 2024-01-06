// import logo from './logo.svg';
import './App.css';

function App() {
  const noel = window.location.origin + "/images/noel1.jpg";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={noel} className="App-logo"  alt='noel' />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
