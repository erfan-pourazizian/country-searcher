import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "./DropDown";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const Main = ({ allCountriesDetails }) => {

  // make first letter of each word in sentence Capital 
  const countryNameInputHandler = (e) => {
    const arr = e.target.value.split(" ")

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const finalInputText = arr.join(" ");
    setCountryName(finalInputText)
  }

  const populationHandler = (e) => {
    setPopulation(e.target.value)
  }

  const [countryName, setCountryName] = useState("")
  const [region, setRegion] = useState("")
  const [population, setPopulation] = useState("")
  const [result, setResult] = useState(allCountriesDetails)

  const filterByName = (filteredData) => {
    // Avoid filter for empty string
    if (!countryName) {
      return filteredData;
    }

    const filteredCountries = filteredData.filter(
      (country) => country.name.includes(countryName)
    );
    return filteredCountries;
  };

  const filterByRegion = (filteredData) => {
    // Avoid filter for empty string
    if (!region) {
      return filteredData;
    }

    const filteredCountries = filteredData.filter(
      (country) => country.region === region
    );
    return filteredCountries;
  };

  const filterByPopulation = (filteredData) => {
    // Avoid filter for empty string
    if (!population) {
      return filteredData;
    }

    const filteredCountries = filteredData.filter(
      (country) => country.population < population
    );
    return filteredCountries;
  };


  useEffect(() => {
    var filteredData = filterByName(allCountriesDetails);
    filteredData = filterByRegion(filteredData);
    filteredData = filterByPopulation(filteredData);
    setResult(filteredData);
  }, [countryName, region, population]);


  return (
    <div className="px-20 pt-9">
      <nav className="bg-LightBackground font-Nunito">
        <div className="flex">
          <div className="flex px-3 py-3 w-2/6 shadow-header rounded-sm">
            <AiOutlineSearch className="flex place-self-center ml-3 mr-2 w-5 h-5" />
            <input placeholder="Search for a country..." value={countryName} className="bg-inherit text-sm focus:outline-none w-full" onChange={countryNameInputHandler} />
          </div>
          <div className="flex px-3 py-3 w-1/6 shadow-header rounded-sm ml-5">
            <input type="number" placeholder="max population" className="bg-inherit text-sm focus:outline-none w-full" value={population} onChange={populationHandler} />
          </div>
          <DropDown setRegion={setRegion} />
        </div>
      </nav>
      <article>
        <div className="grid grid-cols-4 gap-20 mt-10">
          {
            result.map((opt) => (
              <Card opt={opt} key={opt.name} />
            ))
          }
        </div>
      </article>
    </div>
  )
}

export default Main