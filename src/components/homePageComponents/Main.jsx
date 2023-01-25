import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "./DropDown";
import Card from "./Card";
import { useState } from "react";

const Main = ({ allCountriesDetails }) => {

  // make first letter of each word Capital 
  const countryNameInputHandler = (e) => {
    const arr = e.target.value.split(" ")

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const finalInputText = arr.join(" ");
    setCountryName(finalInputText)
  }

  const [countryName, setCountryName] = useState("")
  return (
    <div className="px-20 pt-9">
      <nav className="bg-LightBackground font-Nunito">
        <div className="flex">
          <div className="flex px-3 py-3 w-2/6 shadow-header rounded-sm">
            <AiOutlineSearch className="flex place-self-center ml-3 mr-2 w-5 h-5" />
            <input placeholder="Search for a country..." value={countryName} className="bg-inherit text-sm focus:outline-none w-full" onChange={countryNameInputHandler} />
          </div>
          <DropDown />
        </div>
      </nav>
      <article>
        <div className="grid grid-cols-4 gap-20 mt-10">
          {
            allCountriesDetails
              .filter(country => {
                if (!countryName) return true
                if (country.name.includes(countryName)) {
                  return true
                }
              })
              .map((opt) => (
                <Card opt={opt} key={opt.name} />
              ))
          }
        </div>
      </article>
    </div>
  )
}

export default Main