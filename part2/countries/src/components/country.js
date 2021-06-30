import React, { useState, useEffect } from "react";
import axios from "axios";

import Weather from "./weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const baseUrl = "http://api.weatherstack.com/current";
    const accessKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`${baseUrl}?access_key=${accessKey}&query=${country.capital}`)
      .then((response) => {
        setWeather(response.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        <b>Capital </b>
        {country.capital}
      </p>
      <p>
        <b>Population </b>
        {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}> {language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={country.name} height="100"></img>

      {isLoaded && <Weather weather={weather} />}
    </div>
  );
};

export default Country;
