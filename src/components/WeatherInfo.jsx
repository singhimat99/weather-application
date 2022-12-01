import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function WeatherInfo({ currentWeatherData }) {
  const { current, location } = currentWeatherData;
  const { getFullDate, isMetric } = useWeatherStatsContext();
  return (
    <div className="weather-info">
      <div className="temperature">
        {Math.round(isMetric ? current.temp_c : current.temp_f)} <p>{isMetric ? "°C" : "°F"}</p>
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
