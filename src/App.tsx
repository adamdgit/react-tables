import { useState } from 'react';
import { personData } from "./assets/data";
import './App.css';

type tableDataProps = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  country: string
};

function App() {

  const [tableData, setTableData] = useState<tableDataProps[]>(personData);
  const [ascending, setAscending] = useState(true);

  // simple filter by table header
  function filterTable(tableHead: string) {

    setAscending(!ascending)
    if (ascending) {
      setTableData([...personData.sort((a, b) => {
        if (a[tableHead as keyof tableDataProps] < b[tableHead as keyof tableDataProps] ) {
          return -1;
        }
        if (b[tableHead as keyof tableDataProps] < a[tableHead as keyof tableDataProps]) {
            return 1;
        }
        return 0;
      })])
    } else {
      setTableData([...personData.sort((a, b) => {
        if (a[tableHead as keyof tableDataProps] > b[tableHead as keyof tableDataProps] ) {
          return -1;
        }
        if (b[tableHead as keyof tableDataProps] > a[tableHead as keyof tableDataProps]) {
            return 1;
        }
        return 0;
      })])
    }
  }

  return (
    <div className="App">
      <table className='table-data'>
        <thead>
          <tr>
            <td onClick={() => filterTable("id")}>ID</td>
            <td onClick={() => filterTable("first_name")}>First Name</td>
            <td onClick={() => filterTable("last_name")}>Last Name</td>
            <td onClick={() => filterTable("email")}>Email</td>
            <td onClick={() => filterTable("country")}>Country</td>
          </tr>
        </thead>

        <tbody>
          {tableData.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
            </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default App
