import React from 'react';
import logo from '../../logo.svg';
import './App.css';

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
        <br/>
        <a 
          className="App-link"
          href="https://github.com/GauravWalia19/MernBoilerPlate"
          target="_blank"
          rel="noopener noreferrer"
        >
          MERN Boilerplate
        </a>
      </header>
    </div>
  );
}

export default App;
