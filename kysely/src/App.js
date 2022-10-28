import './App.css';
import {  useQuery,  gql, } from "@apollo/client";

function App() {

  const GET_DATA = gql`
    query GetData {
      cities {
        name
        country{name}
      }
      companies {
        name
        websiteUrl
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error...</p>
    else {
      return (
        <div className="App">
          <h2>Cities</h2>
          <table class="center">
            <tbody>
              <tr>
                <td><h3>City</h3></td>
                <td><h3>Country</h3></td>
              </tr>
              { data.cities.map((city, index) =>
                <tr key={index}>
                  <td>{city.name}</td>
                  <td>{city.country.name}</td>
                </tr>
              )}
            </tbody>
          </table>
          <h2>Companies</h2>
          <table class="center">
            <tbody>
              <tr>
                <td><h3>Company name</h3></td>
                <td><h3>Link</h3></td>
              </tr>
              { data.companies.map((company, index) =>
                <tr key={index}>
                  <td>{company.name}</td>
                  <td><a href={company.websiteUrl}>{company.websiteUrl}</a></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    } 
}

export default App;
