import React from "react";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function ThreeDayForecast() {
  const { useWeatherImage, getFullDate, forecastData, isMetric } =
    useWeatherStatsContext();
  const { forecast } = forecastData;
  return (
    <div className="forecast">
      {forecast.forecastday.map((day, i) => {
        const { weatherImgSrc, loading } = useWeatherImage(day.day.condition);
        return (
          <div className="forecast-card" key={i}>
            <div className="full-date">
              {getFullDate(day.date.replace(/-/g, "/"))}
            </div>
            {!loading && <img src={weatherImgSrc} alt="forecast image" />}
            <div className="temps">
              <div className="max">{Math.round(isMetric ? day.day.maxtemp_c : day.day.maxtemp_f)}{isMetric ? "°C" : "°F"}</div>
              <div className="min">{Math.round(isMetric ? day.day.mintemp_c : day.day.mintemp_f)}{isMetric ? "°C" : "°F"}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// function tommDate() {
//   const wrong = new Date();
//   const tomm = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
//   return `${tomm.getFullYear()}-${tomm.getMonth() + 1}-${tomm.getDate()}`;
// }
