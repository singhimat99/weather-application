import React from "react";

export default function ForecastCard({
    weatherImgSrc,
    loading,
    getFullDate,
    isMetric,
    day,
}) {
    return (
        <div className="forecast-card">
            <div className="full-date">
                {getFullDate(day.date.replace(/-/g, "/"))}
            </div>
            {!loading && <img src={weatherImgSrc} alt="forecast image" />}
            <div className="temps">
                <div className="max">
                    {Math.round(
                        isMetric ? day.day.maxtemp_c : day.day.maxtemp_f
                    )}
                    {isMetric ? "°C" : "°F"}
                </div>
                <div className="min">
                    {Math.round(
                        isMetric ? day.day.mintemp_c : day.day.mintemp_f
                    )}
                    {isMetric ? "°C" : "°F"}
                </div>
            </div>
        </div>
    );
}
