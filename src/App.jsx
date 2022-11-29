import React from "react";
import WeatherHighlights from "./components/WeatherHighlights";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherProvider } from "./contexts/WeatherContext";
import Loading from "./components/Loading";
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
