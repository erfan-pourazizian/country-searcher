import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "./DropDown";
import Card from "./Card";

const Main = ({ allCountriesDetails }) => {
  // console.log(allCountriesDetails);
  return (
    <div className="px-20 pt-9">
      <nav className="bg-LightBackground font-Nunito">
        <div className="flex">
          <div className="flex px-3 py-3 w-2/6 shadow-header rounded-sm">
            <AiOutlineSearch className="flex place-self-center ml-3 mr-2 w-5 h-5" />
            <input placeholder="Search for a country..." className="bg-inherit text-sm focus:outline-none w-full" />
          </div>
          <DropDown />
        </div>
      </nav>
      <article>
        <div className="grid grid-cols-4 gap-20 mt-10">
          {allCountriesDetails.map((opt) => (
            <Card opt={opt} key={opt.name} />
          ))}
        </div>
      </article>
    </div>
  )
}

export default Main