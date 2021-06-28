import React, { useState } from "react";

const Person = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  var includeName = function (name) {
    const personWithName = persons.filter((person) => person.name === name);
    return personWithName.length > 0;
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (includeName(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
      };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
  };

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        name:
        <form onSubmit={addPerson}>
          <input value={newName} onChange={handleNameInputChange} />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
