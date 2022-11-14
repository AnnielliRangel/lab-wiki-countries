import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  return (
    <div
      className="container"
      style={{ maxHeight: '90vh', overflow: 'scroll', }}
    >
      {allCountries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="Flag" style={{ maxHeight: '90vh'}}
            />

            <Link to={`/${country.alpha3Code}`}> {country.name.common} </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
