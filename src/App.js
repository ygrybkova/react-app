import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/ygrybkova/react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Yuliia Grybkova
        </footer>
      </div>
    </div>
  );
}
