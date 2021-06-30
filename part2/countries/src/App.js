import React, { useState, useEffect } from "react";
import axios from "axios";

import FilteredCountries from "./components/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = filter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
    : countries;

  return (
    <div>
      <label>find countries</label>
      <input value={filter} onChange={handleFilterChange} />

        <FilteredCountries
          filteredCountries={filteredCountries}
          setFilter={setFilter}
        />
    </div>
  );
};

export default App;
