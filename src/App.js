
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
      <div  style={{display:"flex "}}>
       <div style={{textAlign:"left "}}>
       <CountriesList allCountries={allCountries}/>
       </div>
        <div className="details" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
               
        <Routes>

        <Route path="/:countryId" element={ <CountriesDetails allCountries = {allCountries} /> } />

        </Routes>

        </div>
        

      </div>

      
    </div>
  );
}

export default App;
