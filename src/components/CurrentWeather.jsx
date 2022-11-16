import React from "react";
import CitySearch from "./CitySearch";

export default function CurrentWeather() {
  return (
    <section className="current-weather">
      <CitySearch />
      <div className="weather-container">
        <div className="search-or-location"></div>
        <div className="image-container"></div>
        <div className="weather-info"></div>
      </div>
    </section>
  );
}
