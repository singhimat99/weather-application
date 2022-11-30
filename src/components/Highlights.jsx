import React from "react";

import { WiDirectionUp } from "react-icons/wi";
import { useWeatherStatsContext } from "../contexts/WeatherContext";

export default function Highlights() {
  const { currentWeatherData } = useWeatherStatsContext();
  const { current } = currentWeatherData;
  return (
    <div className="highlights">
      <div className="highlights-title">
        <h3>Today's Highlights</h3>
      </div>
      <div className="highlights-container">
        <div className="highlight-card">
          <div className="title">Wind Status</div>
          <div className="stat">
            <h3>{current.wind_mph}</h3>
            <p>mph</p>
          </div>
          <div className="wind-direction">
            <WiDirectionUp
              style={{
                fontSize: "2rem",
                transform: `rotate(${current.wind_degree}deg)`,
              }}
            />
            <p>{current.wind_dir}</p>
          </div>
        </div>
        <div className="highlight-card">
          <div className="title">Humidity</div>
          <div className="stat">
            <h3>{current.humidity}</h3>
            <p>%</p>
          </div>
          <progress id="file" value={current.humidity} max="100"></progress>
        </div>
        <div className="highlight-card">
          <div className="title">Visibility</div>
          <div className="stat">
            <h3>{current.vis_miles}</h3>
            <p>miles</p>
          </div>
        </div>
        <div className="highlight-card">
          <div className="title">Air Pressure</div>
          <div className="stat">
            <h3>{current.pressure_mb}</h3>
            <p>mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}
