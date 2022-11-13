import { Link } from 'react-router-dom';


function CountriesList({ allCountries }) {
  return (
    <div className="container">
      {allCountries.map((country) => {
        return (
            <div key={country.alpha3Code}>

                 <Link to={`/country/${country.alpha3Code}`}> {country.name.common} </Link>
            </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
