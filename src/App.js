
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
       <div>
       <CountriesList allCountries={allCountries}/>
       </div>
        <div clasName="details">
               
        <Routes>

        <Route path="/:countryId" element={ <CountriesDetails allCountries = {allCountries} /> } />

        </Routes>

        </div>
        

      </div>

      
    </div>
  );
}

export default App;
