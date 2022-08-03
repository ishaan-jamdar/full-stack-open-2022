import Country from './Country';

const Result = ({ countries, countryFilter, setCountryFilter }) => {
  countries = countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))

  const specialCountry = countries.filter(country => country.name.common.toLowerCase() === countryFilter.toLowerCase())
  if (specialCountry.length !== 0) {
    countries = specialCountry
  }

  if (countries.length > 10) {
    return (<div><div>Too many matches, specify another filter</div></div>)
  } else if (countries.length !== 1) {
    return (
      <div>
        {countries.map(country => 
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => setCountryFilter(country.name.common)}>
              show
            </button>
          </div>
          )
        }
      </div>
    )
  } else {
    return <Country country={countries[0]} />
  }
}

export default Result;
