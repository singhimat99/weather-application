import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function WeatherInfo({ currentWeatherData }) {
  const { current, location } = currentWeatherData;
  const day = () => {
    const currentDate = new Date(current.last_updated);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayName = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return `Today · ${
      dayName[currentDate.getDay()]
    }, ${currentDate.getDate()} ${month[currentDate.getMonth()]}`;
  };
  return (
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
  );
}
