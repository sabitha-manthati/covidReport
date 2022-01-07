import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
function App() {

  const [data,setData]=useState([]);


  useEffect(() => {
    fetch('https://data.covid19india.org/data.json').then(
      res=>res.json()).then(
        jsondata=>setData(jsondata.statewise))
     
  }, [])
  return (
    <div className="App">
     <center> <h1>India Covid-19 Dashboard</h1>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th>States</th>
            <th>Confirmed</th>
            
            <th>Deaths</th>
            <th>Active</th>
            <th>Last Update</th>
           
          </tr>
        </thead>
        <tbody>
            
         {data.map(item=>
          {
            return(
              <tr>
               <td>{item.state}</td>
               <td>{item.confirmed}</td>
              
               <td>{item.deaths}</td>
               <td>{item.active}</td>
               <td>{item.lastupdatedtime}</td>
               


                </tr>
            )
          })}


          </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;
