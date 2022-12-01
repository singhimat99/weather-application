import React, { createContext, useContext, useState, useEffect } from "react";
import Loading from "../components/Loading";

const WeatherContext = createContext();

export function useWeatherStatsContext() {
    return useContext(WeatherContext);
}

const WEATHER_API_BASE_URL = "https://weatherapi-com.p.rapidapi.com";

export function WeatherProvider({ children }) {
    const [currentCoords, setCurrentCoords] = useState("");
    const [currentCity, setCurrentCity] = useState(() => {
        const city = getWeatherByCurrentLocation();

        return "chicago";
    });

    const [pending, setPending] = useState(true);
    const [currentWeatherData, setCurrentWeatherData] = useState({});
    const [forecastData, setForecastData] = useState("");
    const [isMetric, setIsMetric] = useState(false);

    async function getWeatherData(city, endpoint, days = null, date = null) {
        const url = new URL(`/${endpoint}.json`, WEATHER_API_BASE_URL);
        url.searchParams.set("q", city);
        days && url.searchParams.set("days", days);
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
        let coords;
        if (window.navigator.geolocation) {
            // Geolocation available
            window.navigator.geolocation.getCurrentPosition(
                (GeolocationPosition) => {
                    const { latitude, longitude } = GeolocationPosition.coords;
                    setCurrentCoords(`${latitude}, ${longitude}`);
                    setCurrentCity(`${latitude}, ${longitude}`);
                },
                console.warn
            );
        }
        return coords;
    }

    // function getCoords(GeolocationPosition) {
    //   const { latitude, longitude } = GeolocationPosition.coords;
    //   setCurrentCoords(`${latitude}, ${longitude}`);
    //   setCurrentCity(`${latitude}, ${longitude}`);
    // }
    let count = 0;
    useEffect(() => {
        async function getData() {
            const [data, forecast] = await Promise.all([
                getWeatherData(currentCity, "current"),
                getWeatherData(currentCity, "forecast", 3),
            ]);
            setCurrentWeatherData(data);
            setForecastData(forecast);
            setPending(false);
        }

        setPending(true);
        console.log(count);
        count++;

        if (!currentCoords) {
            getWeatherByCurrentLocation();
        }

        if (currentCoords) {
            getData();
        }
    }, [currentCity]);

    function useWeatherImage(condition) {
        const [weatherImgSrc, setWeatherImgSrc] = useState();
        const [loading, setLoading] = useState(true);
        const conditionName = getConditionName(condition);

        useEffect(() => {
            async function getImgSrc() {
                try {
                    const response = await import(
                        `../images/${conditionName}.png`
                    );
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

    if (pending) {
        return <Loading />;
    }
    const values = {
        getWeatherData,
        currentCity,
        setCurrentCity,
        currentWeatherData,
        currentCoords,
        getFullDate,
        useWeatherImage,
        forecastData,
        isMetric,
        setIsMetric,
    };
    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
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

function getFullDate(date) {
    const currentDate = new Date(date);
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

    return `${dayName[currentDate.getDay()]}, ${currentDate.getDate()} ${
        month[currentDate.getMonth()]
    }`;
}
