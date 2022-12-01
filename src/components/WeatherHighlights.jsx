import React from "react";
import ThreeDayForecast from "./ThreeDayForecast";
import Highlights from "./Highlights";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function WeatherHighlights() {
  const {isMetric, setIsMetric} = useWeatherStatsContext();

  function toggleMetric() {
    setIsMetric(prev => !prev);
  }
  return (
    <section className="weather-highlights">
      <div className="measurement">
        <div className="toggle-measure-btns">
        <button className={isMetric ? "active" : null} onClick={toggleMetric}>°C</button>
        <button className={!isMetric ? "active" : null} onClick={toggleMetric}>°F</button>
        </div>
      </div>
      <ThreeDayForecast />
      <Highlights />
    </section>
  );
}
