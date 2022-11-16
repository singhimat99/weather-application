import React from "react";
import WeatherHighlights from "./components/WeatherHighlights";
import CurrentWeather from "./components/CurrentWeather";
import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <WeatherHighlights />
    </div>
  );
}

export default App;
