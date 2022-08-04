import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) =>{
  const [weather, setWeather] = useState()
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const fetchWeather = async () => axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}`)
      .then(response => setWeather(response.data))
    fetchWeather()
    // eslint-disable-next-line
  }, [])

  return (
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
      <div>weather is {weather && Math.round(((weather.main.temp - 273.15)) * 100) / 100} Celcius</div>
      <div>wind {weather && weather.wind.speed} m/s</div>
    </div>
  )
}
  
export default Country;
