import React from "react";
import CurrentWeatherBlock from "./CurrentWeatherBlock";
import ForecastWeatherBlockImg from "./ForecastWeatherBlockImg";
import ForecastWeatherBlockInfo from "./ForecastWeatherBlockInfo";

import "./CurrentWeatherBlock.css";
import "./ForecastWeatherBlockImg.css";
import "./ForecastWeatherBlockInfo.css";

export default function WeatherBlock() {
  return (
    <div className="row">
      <CurrentWeatherBlock defaultCity="New York" />
      <ForecastWeatherBlockImg />
      <ForecastWeatherBlockInfo />
    </div>
  );
}
