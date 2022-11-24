import React, { useEffect, useState } from "react";
import CitySearch from "./CitySearch";
import { useWeatherStats } from "../contexts/WeatherContext";
import { BiCurrentLocation, BiNoEntry, BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import clouds from "../images/Cloud-background.png";

export default function CurrentWeather() {
  const { currentWeatherData } = useWeatherStats();
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
        <div className="btns-container">
          <button onClick={toggleVisibility}>
            <BiSearch color="white" />
          </button>
          <button>
            <BiCurrentLocation color="white" />
          </button>
        </div>
        <WeatherDisplay currentWeatherData={currentWeatherData} />
        <WeatherInfo currentWeatherData={currentWeatherData} />
      </div>
    </section>
  );
}

function WeatherDisplay({ currentWeatherData }) {
  const { current, location } = currentWeatherData;
  const { condition } = current;
  const { weatherImgSrc, error, loading } = useWeatherImage(condition);
  const isCloudy = condition.code > 1005;

  const backgroundStyle = {
    background: `rgba(black, 0.4) url(${true ? clouds : "none"})`,
  };

  return (
    <div className="image-container" style={backgroundStyle}>
      {!loading && <img src={weatherImgSrc} />}
    </div>
  );
}

function useWeatherImage(condition) {
  const [weatherImgSrc, setWeatherImgSrc] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const conditionName = getConditionName(condition);

  useEffect(() => {
    async function getImgSrc() {
      try {
        const response = await import(`../images/${conditionName}.png`);
        setLoading(false);
        setWeatherImgSrc(response.default);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    }
    getImgSrc();
  }, [condition]);

  return {
    weatherImgSrc,
    error,
    loading,
  };
}

function getConditionName(condition) {
  let conditionName = "HeavyRain";
  if (condition.code === 1000) return "Clear";

  if (condition.code === 1003) return "LightCloud";

  if (condition.code === 1117) return "Hail";

  if (isPresent("thunder", condition.text)) return "Thunderstorm";

  if (
    condition.code === 1237 ||
    condition.code === 1261 ||
    condition.code === 1264 ||
    isPresent("freezing", condition.text) ||
    isPresent("sleet", condition.text)
  ) {
    return "Sleet";
  }

  const showerSet = new Set([1063, 1072, 1150, 1153, 1180, 1186]);
  if (showerSet.has(condition.code)) return "Shower";
  const cloudSet = new Set([1006, 1009, 1030, 1135, 1147]);
  if (cloudSet.has(condition.code)) return "HeavyCloud";

  if (isPresent("snow", condition.text)) conditionName = "Snow";
  if (isPresent("heavy", condition.text)) conditionName = "Hail";
  if (isPresent("rain", condition.text)) conditionName = "LightRain";

  return conditionName;
}

function isPresent(string, text) {
  const regex = new RegExp(string, "gi");
  return regex.test(text);
}

function WeatherInfo({ currentWeatherData }) {
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
