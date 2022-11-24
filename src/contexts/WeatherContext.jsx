import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function useWeatherStats() {
  return useContext(WeatherContext);
}

const WEATHER_API_BASE_URL = "https://weatherapi-com.p.rapidapi.com";

export function WeatherProvider({ children }) {
  const [currentCity, setCurrentCity] = useState("Fremont");
  const [pending, setPending] = useState(true);
  const [currentWeatherData, setCurrentWeatherData] = useState({});

  async function getWeatherData(city, endpoint) {
    const url = new URL(`/${endpoint}.json`, WEATHER_API_BASE_URL);
    url.searchParams.set("q", city);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1931b6b2ecmsh5e3302bcb6267f1p1101f4jsncca374547d87",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  function getWeatherByCurrentLocation() {
    if (window.navigator.geolocation) {
      // Geolocation available
      window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    }
  }

  useEffect(() => {
    async function getData() {
      const data = await getWeatherData(currentCity, "current");
      setCurrentWeatherData(data);
      setPending(false);
    }
    getData();

    // getWeatherByCurrentLocation();
  }, [currentCity]);

  if (pending) {
    return <h1>Loading...</h1>;
  }
  const values = {
    getWeatherData,
    currentCity,
    setCurrentCity,
    currentWeatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}
