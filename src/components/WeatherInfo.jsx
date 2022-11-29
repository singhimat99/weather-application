import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function WeatherInfo({ currentWeatherData }) {
  const { current, location } = currentWeatherData;
  const { getFullDate } = useWeatherStatsContext();
  return (
    <div className="weather-info">
      <div className="temperature">
        {Math.round(current.temp_f)} <p>°F</p>
      </div>
      <div className="condition">{current.condition.text}</div>
      <div className="day-location">
        <div>Today · {getFullDate(current.last_updated)}</div>
        <div>
          <MdLocationOn /> {location.name}, {location.region}
        </div>
      </div>
    </div>
  );
}
