import React from "react";

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;