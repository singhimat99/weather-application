import React from "react";
import { useWeatherStatsContext } from "../contexts/WeatherContext";
import ForecastCard from "./ForecastCard";

export default function ThreeDayForecast() {
    const { useWeatherImage, getFullDate, forecastData, isMetric } =
        useWeatherStatsContext();
    const { forecast } = forecastData;
    return (
        <div className="forecast">
            {forecast.forecastday.map((day, i) => {
                const { weatherImgSrc, loading } = useWeatherImage(
                    day.day.condition
                );
                return (
                    <ForecastCard
                        weatherImgSrc={weatherImgSrc}
                        loading={loading}
                        getFullDate={getFullDate}
                        isMetric={isMetric}
                        day={day}
                        key={i}
                    />
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
