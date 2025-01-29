import search_icon from "../Assets/assets/search_icon.svg";
import bell_icon from "../Assets/assets/bell_icon.svg";
import profile_icon from "../Assets/assets/profile_img.png";
import caret_icon from "../Assets/assets/caret_icon.svg";
import logo from "../Assets/assets/logo.png";
import { useEffect, useRef } from "react";
import { logout } from "../Firebase";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
  }, []);

  const handleScroll = () => {
    if (navRef.current) {
      if (window.scrollY >= 50) {
        navRef.current.classList.add("bg-black", "bg-opacity-100");
      } else {
        navRef.current.classList.remove("bg-black", "bg-opacity-100");
      }
    }
  };
  // const toggleNavbar=()=>{
  //   if()
  // }
  return (
    <nav
      ref={navRef}
      className=" w-full  flex justify-between items-center fixed px-10 py-6 z-10  max-lg:h-6 max-xs:px-5 h-10 bg-black"
    >
      <div className="flex items-center ">
        <input type="checkbox" id="navBar" className="hidden peer"/>
      {/* hamburger icon */}
      <label htmlFor="navBar" className="hidden peer-checked:block hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="absolute top-2 left-7    " ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>
      {/* close icon */}
      <label htmlFor="navBar" className="hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className="hidden mr-3  max-lg:block max-lg:w-6 "
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
        <img
          src={logo}
          alt="Logo"
          className="w-28 h-8 mr-3 max-lg:w-16 max-lg:h-5 "
        />
        <ul className="flex  gap-6  ml-5 text-lg text-center max-xs:hidden md:text-base 
        max-xxs:w-screen max-lg:flex-col max-lg:mt-48 max-lg:-ml-48  max-lg:py-6 max-lg:bg-black max-lg:bg-opacity-85 max-lg:hidden peer-checked:block peer-checked:transition-transform peer-checked:ease-in-out 
        peer-checked:duration-1000 peer-checked:text-left
        peer-checked:pl-32
        peer-checked:pr-12
        rounded-2xl
        ">
          <li className="cursor-pointer  rounded border-b-4 w-max border-transparent hover:border-b-red-600 hover:ease-out duration-300  ">
            Home
          </li>
          <li className="cursor-pointer rounded border-b-4  w-max border-transparent hover:border-b-red-600">
            TV Shows
          </li>
          <li className="cursor-pointer rounded border-b-4  w-max border-transparent  hover:border-b-red-600">
            Movies
          </li>
          <li className="cursor-pointer rounded border-b-4  w-max border-transparent  hover:border-b-red-600">
            New & Popular
          </li>
          <li className="cursor-pointer rounded border-b-4 w-max border-transparent  hover:border-b-red-600">
            My List
          </li>
          <li className="cursor-pointer rounded border-b-4 w-max border-transparent  hover:border-b-red-600 ">
            Browse by Language
          </li>
        </ul>
      </div>

      {/* Right Side: Search, Notification, Profile */}
      <div className="flex items-center justify-center">
        {/* Search Icon */}
        <img src={search_icon} alt="" className="w-4 h-4 mr-2" />
        {/* <div className="flex relative justify-center items-center peer border-4 border-transparent rounded-xl">
        <input type="text" placeholder="Search" className="bg-gray-700 pl-4 py-1 outline-none rounded-full peer-focus:border-white"/>
        <div className="absolute right-0 bg-gray-900 w-10 h-8 flex items-center justify-center rounded-r-xl">
        <img
          src={search_icon}
          alt="Search"
          className="w-3 h-3 cursor-pointer mr-2  " />
        </div>
        </div> */}
        {/* {searchbar?<img
          src={search_icon}
          alt="Search"
          className="w-4 h-4 cursor-pointer mr-2" onClick={setSearchbar=()=>{searchbar=true}} 
        />:<input type="text" placeholder="Search" className="bg-gray-700 pl-3 outline-none rounded-full"/>} */}

        {/* Notification Bell */}
        <img
          src={bell_icon}
          alt="Notifications"
          className="w-4 h-4 cursor-pointer mr-2"
        />

        {/* Profile */}
        <div className="flex items-center space-x-2 relative group">
          <img
            src={profile_icon}
            alt="Profile"
            className="w-6 h-6 rounded-full cursor-pointer max-xs:[w-3 aspect-square]"
          />
          <img
            src={caret_icon}
            alt="Caret"
            className="w-4 h-4 cursor-pointer"
          />
          <div className="absolute top-full right-0 px-3 py-1 rounded-lg w-max bg-black z-10 hidden group-hover:block">
            <p
              className="text-sm cursor-pointer hover:text-red-600"
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
