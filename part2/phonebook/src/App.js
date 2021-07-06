import React, { useState, useEffect } from "react";
import personService from "./services/persons";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import NameFilter from "./components/NameFilter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");

      setMessage(`Added ${returnedPerson.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  };

  const updateNumber = (person) => {
    if (
      window.confirm(
        `${person.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const updatedPerson = { ...person, number: newNumber };
      personService
        .update(updatedPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== updatedPerson.id ? person : returnedPerson
            )
          );
          setMessage(`Updated ${returnedPerson.name}'s number`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          alert(
            `the person '${updatedPerson.name}' was already deleted from server`
          );
          setPersons(
            persons.filter((person) => person.id !== updatedPerson.id)
          );
        });
      setNewName("");
      setNewNumber("");
    }
  };

  const handleAddPersonForm = (event) => {
    event.preventDefault();

    const person = persons.find((person) => person.name === newName);
    // if person already exists
    if (person) {
      updateNumber(person);
    } else {
      addPerson();
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (personId) => {
    const person = persons.find((person) => person.id === personId);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.destroy(personId).then(() => {
        setMessage(`Deleted ${person.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
      setPersons(persons.filter((person) => person.id !== personId));
    }
  };

  const filteredPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <NameFilter
        label="filter shown with "
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={handleAddPersonForm}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
