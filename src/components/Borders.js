import { Link } from 'react-router-dom';

function Borders({country}) {
  return (
    <div>
      {country.map(() => {
        return (
          <li key={country.alpha2Code}>
            <Link to={`/country/${country.alpha3Code}`}>
              {' '}
              {country.name.common}{' '}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
export default Borders;
