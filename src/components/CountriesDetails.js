import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountriesDetails({ allCountries }) {
  const { countryId } = useParams();

  const countrySelected = allCountries.find((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countrySelected.alpha2Code.toLowerCase()}.png`}
          alt="Flag"
        />
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td> {countrySelected.name.common} </td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countrySelected.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countrySelected.borders.map((border) => {
                    return (
                      <li Key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default CountriesDetails;
