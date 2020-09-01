import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
        <span className="temp">{Math.round(props.data.temp)}</span>
        <span className="units">
          <a href="/" className="inactive">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
      </h2>
      <p className="otherinfo">
        <strong>
          <span className="text-capitalize">{props.data.description}</span>
        </strong>
        <br />
        Humidity: {props.data.humidity} %
        <br />
        Wind: {Math.round(props.data.wind)} km/h
      </p>
    </div>
  );
}
