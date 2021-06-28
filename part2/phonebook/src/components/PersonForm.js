import React from "react";
import InputField from "./InputField";

const Button = ({ type, text }) => <button type={type}>{text}</button>;

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <InputField label="name: " value={newName} onChange={handleNameChange} />
      <InputField
        label="number: "
        value={newNumber}
        onChange={handleNumberChange}
      />
      <Button type="submit" text="add" />
    </form>
  );
};

export default PersonForm;