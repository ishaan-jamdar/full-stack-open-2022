const Country = ({ country }) =>
  <div>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital[0]}</div>
    <div>area {country.area}</div>
    <h4>languages:</h4>
    <ul>
      {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
    </ul>
    <img src={country.flags.svg} alt={`${country.name.common} flag`} height="156" />
    <h3>Weather in {country.capital[0]}</h3>
  </div>


export default Country;
