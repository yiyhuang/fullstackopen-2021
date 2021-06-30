import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);

  return (
    <div>
      <h3>Weather in {weather.location.name}</h3>
      <p>
        <b>Temperature </b>
        {weather.current.temperature} Celsius
      </p>
      <img
        src={weather.current.weather_icons[0]}
        alt={weather.current.weather_descriptions[0]}
        height="100"
      ></img>
      <p>
        <b>Wind </b>
        {weather.current.wind_speed} mph <b>direction</b>{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
