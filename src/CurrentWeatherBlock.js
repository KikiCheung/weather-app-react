import React from "react";

export default function CurrentWeatherBlock() {
  let weatherData = {
    city: "Hong Kong",
    date: "Monday 20:58",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 88,
    wind: 2,
  };
  return (
    <div className="col-7">
      <div className="current-weather-img-border">
        <img src={weatherData.imgUrl} alt="" className="current-weather-img" />
      </div>
      <h1>{weatherData.city}</h1>
      <p className="last-update">
        Last updated: <span className="day-time">{weatherData.date}</span>
      </p>
      <h2>
        <span className="temp">26</span>
        <span className="units">
          <a href="/" className="inactive">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
      </h2>
      <p className="otherinfo">
        <strong>
          <span className="description">{weatherData.description}</span>
        </strong>
        <br />
        Humidity: <span className="humidity">{weatherData.humidity}</span> %
        <br />
        Wind: <span className="wind">{weatherData.wind}</span> km/h
      </p>
    </div>
  );
}
