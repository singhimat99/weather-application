import React, { useEffect, useState } from "react";
import CitySearch from "./CitySearch";
import { useWeatherStatsContext } from "../contexts/WeatherContext";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import WeatherInfo from "./WeatherInfo";
import WeatherDisplay from "./WeatherDisplay";

export default function CurrentWeather() {
  const { currentWeatherData, setCurrentCity, currentCoords } =
    useWeatherStatsContext();
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleVisibility() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <section className="current-weather">
      <CitySearch
        showSidebar={showSidebar}
        toggleVisibility={toggleVisibility}
      />
      <div className="weather-container">
        <div className="btns-container">
          <button onClick={toggleVisibility}>
            <BiSearch color="white" />
          </button>
          <button onClick={() => setCurrentCity(currentCoords)}>
            <BiCurrentLocation color="white" />
          </button>
        </div>
        <WeatherDisplay currentWeatherData={currentWeatherData} />
        <WeatherInfo currentWeatherData={currentWeatherData} />
      </div>
    </section>
  );
}
