import { BiMenuAltLeft } from "react-icons/bi";
import { menuItems } from "../../constants";
import { FaSun,FaMoon } from "react-icons/fa";
import { useState,useEffect } from "react";
//import Logo from "./Logo";
const Header = ({ handleDarkMode , darkMode }) => {
const[toggleMenu ,setToggleMenu] = useState(false);

 const handleToggleMenu = () => {
  setToggleMenu((prev) => !prev);
 };


//  useEffect(() => {
// }, [darkMode]);


   return <header className="fixed left-0 top-2 right-0 z-50 px-5 md:px-16">
    <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between 
  rounded-lg border-2 border-slate-500 bg-slate-50 text-slate-700 
  dark:bg-slate-700 dark:text-white px-3 py-1 md:flex-row w-full">
      <div className="flex w-full items-center justify-between md:flex-row">
            <h1 className="flex items-center gap-1 font-bold text-xl">
            <img src="/src/assets/carnew.gif" alt="car-logo" className=" flex flex-row h-16 w-16 object-contain mix-blend-multiply dark:mix-blend-hard-light"/>
               <a className="flex text-4xl rounded-sm p-1 px-1" href="#"><p className="text-orange-600 dark:text-orange-600">Car</p><p className="text-gray-900 dark:text-gray-100">veo</p></a> 
            </h1>
            <button className ="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden md:mt-0 md:ml-5" onClick={handleToggleMenu}>
    <BiMenuAltLeft className="text-2xl"/>
            </button>
        </div>
           <div className={`${toggleMenu ? "block": "hidden"} w-full items-start md:w-auto md:items-center md:flex`} >
                <ul className=" mt-5 flex flex-col items-start md:mt-0 md:flex-row">
                {menuItems.map((item,index) => 
                 {
                 return(  <li key={index} className="w-full md:w-auto "> 
                      <a href={item.href} className="block rounded-md p-2 px-4 hover:text-blue-700 hover:bg-gray-200 dark:hover:text-blue-700">{item.name}</a>
                        </li>)
                 })} 
                </ul> 

                <button key={darkMode ? "dark" : "light"}
                className="mt-5 rounded-full p-2 bg-slate-700 text-slate-50 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0" onClick={handleDarkMode}>
                    { darkMode ? <FaSun className="" />: <FaMoon className="" />}

                </button>
            </div>
    </nav>
  </header>
}

export default Header
