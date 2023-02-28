import React from "react";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function HourlyForecast() {
    const { useWeatherImage, getFullDate, forecastData, isMetric } =
        useWeatherStatsContext();
    const { forecast } = forecastData;
    console.log(forecast);
    const hourlyData = getHourlyDataFromForecast(forecast);
    console.log(hourlyData);
    return <div>HourlyForecast</div>;
}

function getHourlyDataFromForecast(forecast) {
    let hourlyData = [];
    forecast.forecastday.forEach((element) => {
        hourlyData = [...hourlyData, ...element.hour];
    });
    return hourlyData;
}
