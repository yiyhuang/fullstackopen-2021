import React from "react";
import InputField from "./InputField";

const NameFilter = ({ label, filter, handleFilterChange }) => {
  return (
    <InputField label={label} value={filter} onChange={handleFilterChange} />
  );
};

export default NameFilter;