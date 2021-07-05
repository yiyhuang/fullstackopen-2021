import React from "react";

const Person = ({ person, handleDelete }) => {
  return (
    <li>
      {person.name} {person.number}{" "}
      <button onClick={() => handleDelete(person.id)}>delete</button>
    </li>
  );
};

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} handleDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
