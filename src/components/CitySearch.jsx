import React, { useRef, useState, useEffect } from "react";
import { useWeatherStats } from "../contexts/WeatherContext";
import { MdArrowForwardIos } from "react-icons/md";

export default function CitySearch({ showSidebar, toggleVisibility }) {
  const { getWeatherData, currentCity, setCurrentCity } = useWeatherStats();
  const [cities, setCities] = useState([]);
  const [cityInput, setCityInput] = useState("");
  let timeoutID;

  async function getData() {
    const data = await getWeatherData(cityInput, "search");
    setCities(data);
  }

  useEffect(() => {
    if (cityInput.length > 2) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(getData, 500);
    } else {
      setCities([]);
    }
    return () => {
      clearTimeout(timeoutID);
    };
  }, [cityInput]);

  function handleSelect(e) {
    e.preventDefault();

    setCurrentCity(e.target.textContent);
    setCityInput("");
    toggleVisibility();
  }

  return (
    <div
      className={showSidebar ? "search-container active" : "search-container"}
    >
      <div className="search-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (cityInput.length < 1) return;
            getData();
          }}
        >
          <input
            type="text"
            placeholder="search for a city..."
            value={cityInput}
            onChange={(e) => {
              setCityInput(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="results-container">
        {cities.map((city) => {
          return (
            <div key={city.id} onClick={handleSelect}>
              {city.name}
              <MdArrowForwardIos color="white" className="arrow" />
            </div>
          );
        })}
      </div>
      <button onClick={toggleVisibility} className="x-btn">
        X
      </button>
    </div>
  );
}
