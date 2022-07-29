const Persons = ({ persons, filterString }) =>
  <div>
    {persons.filter(person => person.name.toLowerCase().includes(filterString.toLowerCase()))
    .map(person => <div key={person.name}>{person.name} {person.number}</div>)}
  </div>

export default Persons;
