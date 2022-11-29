import React, { useState, useEffect } from "react";
import clouds from "../images/Cloud-background.png";

export default function WeatherDisplay({ currentWeatherData }) {
  const { current } = currentWeatherData;
  const { condition } = current;
  const { weatherImgSrc, loading } = useWeatherImage(condition);
  const isCloudy = condition.code > 1005;

  const backgroundStyle = {
    backgroundSize: "cover",
    background: isCloudy
      ? `linear-gradient(rgb(30, 33, 58, 0.5), rgb(30, 33, 58, 0.5)), url(${clouds})`
      : "none",
    backgroundPosition: "30% 0%",
  };

  return (
    <div className="image-container" style={backgroundStyle}>
      {!loading && <img src={weatherImgSrc} />}
    </div>
  );
}

function useWeatherImage(condition) {
  const [weatherImgSrc, setWeatherImgSrc] = useState();
  const [loading, setLoading] = useState(true);
  const conditionName = getConditionName(condition);

  useEffect(() => {
    async function getImgSrc() {
      try {
        const response = await import(`../images/${conditionName}.png`);
        setLoading(false);
        setWeatherImgSrc(response.default);
      } catch (e) {
        console.log(e);
      }
    }
    getImgSrc();
  }, [condition]);

  return {
    weatherImgSrc,
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
