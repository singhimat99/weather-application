import React from "react";
import Forecast from "./Forecast";
import Highlights from "./Highlights";

export default function WeatherHighlights() {
  return (
    <section className="weather-highlights">
      <Forecast />
      <Highlights />
    </section>
  );
}
