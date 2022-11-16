import React from "react";

export default function WeatherHighlights() {
  return (
    <section className="weather-highlights">
      <div className="forecast">
        <div className="weather-card"></div>
        <div className="weather-card"></div>
        <div className="weather-card"></div>
        <div className="weather-card"></div>
        <div className="weather-card"></div>
      </div>
      <div className="highlights">
        <div className="highlights-title">
          <h3>Highlights</h3>
        </div>
        <div className="highlights-container">
          <div className="highlight-card"></div>
          <div className="highlight-card"></div>
          <div className="highlight-card"></div>
          <div className="highlight-card"></div>
        </div>
      </div>
    </section>
  );
}
