import React from "react";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function Forecast() {
  const { useWeatherImage, getFullDate, forecastData } = useWeatherStatsContext();
  const { forecast } = forecastData;
  console.log(forecast);
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
              <div className="max">{Math.round(day.day.maxtemp_f)}°F</div>
              <div className="min">{Math.round(day.day.mintemp_f)}°F</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function tommDate() {
  const wrong = new Date();
  const tomm = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  return `${tomm.getFullYear()}-${tomm.getMonth() + 1}-${tomm.getDate()}`;
}
