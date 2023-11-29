import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
      </div>
    </div>
  );
}
