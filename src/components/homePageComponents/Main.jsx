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
            <AiOutlineSearch className="flex place-self-center mr-3 w-5 h-5" />
            <input placeholder="Search for a country..." className="bg-inherit text-sm" />
          </div>
          <DropDown />
        </div>
      </nav>
      <article>
        <div className="grid grid-cols-4 gap-20 mt-6">
          {allCountriesDetails.slice(0, 20).map((opt) => (
            <Card opt={opt} key={opt.name} />
          ))}
        </div>
      </article>
    </div>
  )
}

export default Main