
import './App.css';
import {Routes, Route } from  "react-router-dom"
import countries from "./countries.json"
import { useState } from "react"
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';


function App() {
  const[allCountries, setAllContries] = useState(countries)


  return (
    <div className="App">
      <Navbar />
      <div ClassName= "paises" >
        <CountriesList allCountries={allCountries}/>
        
        <CountriesDetails allCountries = {allCountries} />

      </div>

      
    </div>
  );
}

export default App;
