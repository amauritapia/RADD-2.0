import React from "react";
import logo from "./logo.svg";

import "./App.css";
import BaseHeroPage from "./components/HeroComponents/BaseHeroPage";

//base url to be used with all axios requests

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseHeroPage className="heroesPage" />
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
    </div>
  );
}

export default App;
