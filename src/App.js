import React from "react";
import SearchForm from "./SearchForm";
import WeatherBlock from "./WeatherBlock";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <WeatherBlock />
        <footer>
          <a
            href="https://github.com/KikiCheung/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code{" "}
          </a>
          by Kiki Cheung
        </footer>
      </div>
    </div>
  );
}
