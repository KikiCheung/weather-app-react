import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function CurrentWeatherBlock(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  // const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      img: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="col-7">
        <div className="current-weather-img-border">
          <img
            src={weatherData.img}
            alt={weatherData.description}
            className="current-weather-img"
          />
        </div>
        <h1>{weatherData.city}</h1>
        <p className="last-update">
          Last updated: {""}
          <FormattedDate date={weatherData.date} />
        </p>
        <h2>
          <span className="temp">{Math.round(weatherData.temp)}</span>
          <span className="units">
            <a href="/" className="inactive">
              °C
            </a>{" "}
            |<a href="/">°F</a>
          </span>
        </h2>
        <p className="otherinfo">
          <strong>
            <span className="text-capitalize">{weatherData.description}</span>
          </strong>
          <br />
          Humidity: {weatherData.humidity} %
          <br />
          Wind: {weatherData.wind} km/h
        </p>
      </div>
    );
  } else {
    const apiKey = "6d311b54424188b229639bfec29ddda2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
