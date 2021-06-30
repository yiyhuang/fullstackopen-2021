import React from "react";
import Country from "./country";

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

const FilteredCountries = ({ filteredCountries: countries, setFilter }) => {
  const countriesCount = countries.length;
  let toRender = <Countries countries={countries} setFilter={setFilter} />;

  if (countriesCount > 10) {
    toRender = "Too many matches, specify another filter. ";
  } else if (countriesCount === 1) {
    const country = countries[0];
    toRender = <Country country={country} />;
  }

  return <div>{toRender}</div>;
};

export default FilteredCountries;
