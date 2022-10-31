import React from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Header />
      <h1>Rick and Morty Characters</h1>
      <Characters />
    </div>
  );
}

export default App;
