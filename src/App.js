import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
        <footer>
          <a href="https://github.com/ygrybkova/react-app" target="_blank">
            Open-source code
          </a>
          by Yuliia Grybkova
        </footer>
      </div>
    </div>
  );
}
