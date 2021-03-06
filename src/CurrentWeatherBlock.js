import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTempConversion from "./WeatherTempConversion";

import "./CurrentWeatherBlock.css";

export default function CurrentWeatherBlock(props) {
  return (
    <div className="col-7">
      <div className="current-weather-img-border">
        <WeatherIcon code={props.data.icon} />
      </div>
      <h1>{props.data.city}</h1>
      <p className="last-update">
        Last updated: {""}
        <FormattedDate date={props.data.date} />
      </p>
      <h2>
        <WeatherTempConversion celsius={props.data.temp} />
      </h2>
      <p className="otherinfo">
        <strong className="text-capitalize">{props.data.description}</strong>
        <br />
        Humidity: {props.data.humidity} %
        <br />
        Wind: {Math.round(props.data.wind)} km/h
      </p>
    </div>
  );
}
