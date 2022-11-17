import React, { useState } from "react";
import CitySearch from "./CitySearch";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

export default function CurrentWeather() {
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
        <div className="search-or-location">
          <button onClick={toggleVisibility}>
            <BiSearch color="white" />
          </button>
          <button>
            <BiCurrentLocation color="white" />
          </button>
        </div>
        <div className="image-container"></div>
        <div className="weather-info"></div>
      </div>
    </section>
  );
}
