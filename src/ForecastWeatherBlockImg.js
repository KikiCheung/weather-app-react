import React from "react";

import "./ForecastWeatherBlockImg.css";

export default function ForecastWeatherBlockImg() {
  return (
    <div className="col-3">
      <ul className="forecast-weather-img-border">
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=" "
            className="forecast-weather-img"
          />
        </li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=" "
            className="forecast-weather-img"
          />
        </li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=" "
            className="forecast-weather-img"
          />
        </li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=" "
            className="forecast-weather-img"
          />
        </li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=" "
            className="forecast-weather-img"
          />
        </li>
      </ul>
    </div>
  );
}
