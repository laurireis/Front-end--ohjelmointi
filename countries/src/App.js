import './App.css';
import {  useQuery,  gql, } from "@apollo/client";

function App() {

  const GET_DATA = gql`
    query GetData {
      countries{name}
      countries{code}
      countries{continent{name}}
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error...</p>
    else {
      return (
        <div className="App">
          <table class="center">
            <tbody>
              <tr>
                <td><h4>Code</h4></td>
                <td><h4>Country</h4></td>
                <td><h4>Continent</h4></td>
              </tr>
              { data.countries.map((country, index) =>
                <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.continent.name}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
}

export default App;
