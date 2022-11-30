import React from "react";
import Forecast from "./Forecast";
import Highlights from "./Highlights";

export default function WeatherHighlights() {
  return (
    <section className="weather-highlights">
      <div className="measurement">
        <button>°F</button>
        <button>°C</button>
      </div>
      <Forecast />
      <Highlights />
    </section>
  );
}
