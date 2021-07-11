import React from "react";
import "./App.css";
import { Painting } from "./components/Painting/Painting";

function App() {
  return (
    <div className="App">
      <section className="header">
        <h1>Hola soy Pedrito</h1>
      </section>
      <section className="painting-section">
        <Painting />
      </section>
    </div>
  );
}

export default App;
