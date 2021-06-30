import React from "react";

const Countries = ({ countries, setFilter }) => {
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {" "}
            {country.name}
            <button onClick={() => setFilter(country.name)}>show</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Country = ({ country }) => {
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
    </div>
  );
};

function renderSwitch(countries, setFilter) {
  const countriesCount = countries.length;
  if (countriesCount > 10) {
    return "Too many matches, specify another filter. ";
  } else if (countriesCount === 1) {
    const country = countries[0];
    return <Country country={country} />;
  } else {
    return <Countries countries={countries} setFilter={setFilter} />;
  }
}

const FilteredCountries = ({ filteredCountries, setFilter }) => {
  return <div>{renderSwitch(filteredCountries, setFilter)}</div>;
};

export default FilteredCountries;
