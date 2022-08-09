import { useState, useEffect } from 'react';

import personService from './services/persons';

import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';


const App = () => {
  const [persons, setPersons] = useState([])
  const [filterString, setFilterString] = useState('')
  const [newPerson, setNewPerson] = useState({name: '', number: ''})

  useEffect(() => {
    personService.getAll()
      .then(response => setPersons(response))
  }, [])

  const addPerson = e => {
    e.preventDefault()
    const found = persons.find(person => person.name === newPerson.name)
    if (found) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(found.id, {...found, number: newPerson.number})
          .then(updatedPerson => setPersons(persons.map(person => person.id !== found.id ? person : updatedPerson)))
      }
    } else {
      personService
        .create({name: newPerson.name, number: newPerson.number})
        .then(response => setPersons(persons.concat(response)))
    }
  }

  const deleteEntry = (id, name) => {
    if (window.confirm(`delete ${name}`)) {
      personService
        .remove(id)
        .then(setPersons(persons.filter(person => person.id !== id)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} setFilterString={setFilterString} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newPerson={newPerson} setNewPerson={setNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString} deleteEntry={deleteEntry} />
    </div>
  )
}

export default App;
