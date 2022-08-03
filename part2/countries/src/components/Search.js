const Search = ({ countryFilter, setCountryFilter }) =>
  <div>
    find countries <input
      value={countryFilter}
      onChange={e => setCountryFilter(e.target.value)}
    />
  </div>

export default Search;
