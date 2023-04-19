import './App.css';
import axios from "axios";
import Offices from './components/offices';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/offices";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [offices, setOffices] = useState([])

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setOffices(items);
      }
    })
    return () => (mounted = false);
  }, []);


  return (
    <div className="App">
      <h1>Lista de Escritórios</h1>
      <Offices offices={offices}/>
    </div>
  );
}

export default App;
