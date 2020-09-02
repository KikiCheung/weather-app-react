import React, { useState } from "react";
import axios from "axios";
import CurrentWeatherBlock from "./CurrentWeatherBlock";
import ForecastWeatherBlock from "./ForecastWeatherBlock";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  //searchcity

  function startSearchCity() {
    const apiKey = "6d311b54424188b229639bfec29ddda2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    startSearchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //currentlocation

  function retrievePosition(position) {
    const apiKey = "6d311b54424188b229639bfec29ddda2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }
  function handleClick(event) {
    event.preventDefault();
    getCurrentLocation();
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="col-2">
              <button onClick={handleClick} className="btn btn-info">
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <CurrentWeatherBlock data={weatherData} />
          <ForecastWeatherBlock city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    startSearchCity();
    return "Loading...";
  }
}
