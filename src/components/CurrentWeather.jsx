import React, { useState } from "react";
import CitySearch from "./CitySearch";
import { useWeatherStats } from "../contexts/WeatherContext";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function CurrentWeather() {
  const { currentWeatherData } = useWeatherStats();
  const { current, location } = currentWeatherData;
  const [showSidebar, setShowSidebar] = useState(false);
  function toggleVisibility() {
    setShowSidebar((prev) => !prev);
  }
  const day = () => {
    const currentDate = new Date(current.last_updated_epoch);
    const date = currentDate.getDate();
    let month;
    let dayName;
    switch (currentDate.getDay()) {
      case 1:
        dayName = "Mon";
        break;
      case 2:
        dayName = "Teus";
        break;
      case 3:
        dayName = "Wed";
        break;
      case 4:
        dayName = "Thurs";
        break;
      case 5:
        dayName = "Fri";
        break;
      case 6:
        dayName = "Sat";
        break;
      case 0:
        dayName = "Sun";
        break;
    }

    switch (currentDate.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }

    return `Today · ${dayName}, ${date} ${month}`;
  };
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
          <button>
            <BiCurrentLocation color="white" />
          </button>
        </div>
        <div className="image-container"></div>
        <div className="weather-info">
          <div className="temperature">
            {Math.round(current.temp_f)} <p>°F</p>
          </div>
          <div className="condition">{current.condition.text}</div>
          <div className="day-location">
            <div>{day()}</div>
            <div>
              <MdLocationOn /> {location.name}, {location.region}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
