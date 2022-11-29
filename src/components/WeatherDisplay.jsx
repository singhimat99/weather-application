import React from "react";
import clouds from "../images/Cloud-background.png";
import { useWeatherStats } from "../contexts/WeatherContext";

export default function WeatherDisplay({ currentWeatherData }) {
  const { useWeatherImage } = useWeatherStats();
  const { current } = currentWeatherData;
  const { condition } = current;
  const { weatherImgSrc, loading } = useWeatherImage(condition);
  const isCloudy = condition.code > 1005;

  const backgroundStyle = {
    backgroundSize: "cover",
    background: isCloudy
      ? `linear-gradient(rgb(30, 33, 58, 0.5), rgb(30, 33, 58, 0.5)), url(${clouds}) repeat -10px -10px`
      : "none",
  };

  return (
    <div className="image-container" style={backgroundStyle}>
      {!loading && <img src={weatherImgSrc} />}
    </div>
  );
}
