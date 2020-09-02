import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastWeatherInfo from "./ForecastWeatherInfo";
import axios from "axios";

import "./ForecastWeatherBlock.css";

export default function ForecastWeatherBlock(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <div className="col-8">
          <ul>
            <li className="forecast-weather-img-border">
              <WeatherIcon code={forecast.list[0].weather[0].icon} />
            </li>
            <li className="forecast-weather-img-border">
              <WeatherIcon code={forecast.list[1].weather[0].icon} />
            </li>
            <li className="forecast-weather-img-border">
              <WeatherIcon code={forecast.list[2].weather[0].icon} />
            </li>
            <li className="forecast-weather-img-border">
              <WeatherIcon code={forecast.list[3].weather[0].icon} />
            </li>
            <li className="forecast-weather-img-border">
              <WeatherIcon code={forecast.list[4].weather[0].icon} />
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li className="forecast-temp">
              <ForecastWeatherInfo data={forecast.list[0]} />
            </li>
            <li className="forecast-temp">
              <ForecastWeatherInfo data={forecast.list[1]} />
            </li>
            <li className="forecast-temp">
              <ForecastWeatherInfo data={forecast.list[2]} />
            </li>
            <li className="forecast-temp">
              <ForecastWeatherInfo data={forecast.list[3]} />
            </li>
            <li className="forecast-temp">
              <ForecastWeatherInfo data={forecast.list[4]} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "6d311b54424188b229639bfec29ddda2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
