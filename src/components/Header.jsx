import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex py-5 px-20 bg-white font-Nunito">
        <p className="mr-auto font-extrabold text-lg">Where in the world?</p>
        <div className="flex">
            <span className="flex place-self-center mr-[0.15rem] w-5 h-5">
            <MdOutlineDarkMode/>
            </span>
            <p className="font-semibold">Dark Mode</p>
        </div>
    </div>
  )
}

export default Header