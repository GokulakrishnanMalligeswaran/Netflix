 import search_icon from "../Assets/assets/search_icon.svg";
import bell_icon from "../Assets/assets/bell_icon.svg";
import profile_icon from "../Assets/assets/profile_img.png";
import caret_icon from "../Assets/assets/caret_icon.svg";
import logo from "../Assets/assets/logo.png";
import { useEffect, useRef } from "react";
import { logout } from "../Firebase";

const Navbar = () => {
  const navRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(navRef.current){
    if(window.scrollY >=80){
      navRef.current.classList.add("bg-black","bg-opacity-100")
    }else{
      navRef.current.classList.remove("bg-black","bg-opacity-100")
  
  }
  }
})
  },[])
  return (
    <div ref={navRef} className=' w-full flex justify-between text-{14px} font fixed items-center px-5 py-4  z-10'>
      {/* Left Side: Logo and Menu */}
      <div className="flex items-center gap-12 lg:[ gap-6]">
        <img src={logo} alt="Logo" className="w-24 h-6 md:[w-16 h-4]" />
        <ul className="flex ml-10 space-x-10 font-sans font-medium md:[text-[10px] ml-0] lg:ml-0 text-[16px] xl:text-[16px] ">
          <li className="cursor-pointer hover:text-red-600 ">Home</li>
          <li className="cursor-pointer hover:text-red-600">TV Shows</li>
          <li className="cursor-pointer hover:text-red-600">Movies</li>
          <li className="cursor-pointer hover:text-red-600">New & Popular</li>
          <li className="cursor-pointer hover:text-red-600">My List</li>
          <li className="cursor-pointer hover:text-red-600">Browse by Language</li>
        </ul>
      </div>
      
      {/* Right Side: Search, Notification, Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <img src={search_icon} alt="Search" className="w-5 h-5 cursor-pointer" />
        <p>Children</p>
        {/* Notification Bell */}
        <img src={bell_icon} alt="Notifications" className="w-5 h-5 cursor-pointer" />
        
        {/* Profile */}
        <div className="flex items-center space-x-2 relative group">
          <img src={profile_icon} alt="Profile" className="w-5 h-5 rounded-full cursor-pointer" />
          <img src={caret_icon} alt="Caret" className="w-4 h-4 cursor-pointer" />
          <div className="absolute top-full right-0 p-5 rounded-sm w-max bg-black z-10 hidden group-hover:block">
            <p className="text-{13px} cursor-pointer hover:text-red-600" onClick={()=>{logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
