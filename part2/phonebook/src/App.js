import { useState } from 'react';

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-1234567'}
  ])
  const [filterString, setFilterString] = useState('')
  const [newPerson, setNewPerson] = useState({name: '', number: ''})

  const addPerson = e => {
    e.preventDefault()
    if (persons.map(person => person.name).includes(newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newPerson.name, number: newPerson.number}))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} setFilterString={setFilterString} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newPerson={newPerson} setNewPerson={setNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString} />
    </div>
  )
}

export default App;
