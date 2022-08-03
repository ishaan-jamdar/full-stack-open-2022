import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Result from './components/Result';

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  
  useEffect(() => axios.get('https://restcountries.com/v3.1/all').then(response => setCountries(response.data)), [])
  
  return (
    <div>
      <Search countryFilter={countryFilter} setCountryFilter={setCountryFilter} />
      <Result countries={countries} countryFilter={countryFilter} setCountryFilter={setCountryFilter} />
    </div>
  )
}

export default App;
