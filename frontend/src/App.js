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
      </header>
    </div>
  );
}

export default App;
