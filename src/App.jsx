import React from "react";
import WeatherHighlights from "./components/WeatherHighlights";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherProvider } from "./contexts/WeatherContext";
import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <CurrentWeather />
        <WeatherHighlights />
      </div>
    </WeatherProvider>
  );
}

export default App;
