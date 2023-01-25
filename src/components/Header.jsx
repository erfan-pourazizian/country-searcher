import { MdOutlineDarkMode,MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);

  if (!mounted) return <></>;
  return (
    <div className="flex py-5 px-5 lg:px-20 bg-LightBackground dark:bg-DarkElements font-Nunito shadow-header sticky">
      <p className="mr-auto font-extrabold text-base lg:text-lg">Where in the world?</p>
      <button className="flex" onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}>
        <span className="flex place-self-center mr-[0.15rem] w-5 h-5">
        {resolvedTheme === "dark" ? <MdDarkMode className="text-LightBackground" /> : <MdOutlineDarkMode />}
        </span>
        <p className="font-semibold">Dark Mode</p>
      </button>
    </div>
  )
}

export default Header