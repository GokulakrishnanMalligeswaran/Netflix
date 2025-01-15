// import React from 'react'
// import search_icon from "../Assets/assets/search_icon.svg"
// import bell_icon from "../Assets/assets/bell_icon.svg"
// import profile_icon from "../Assets/assets/profile_img.png"
// import caret_icon from "../Assets/assets/caret_icon.svg"
// import logo from "../Assets/assets/logo.png"
// const Navbar = () => {
//   return (
//     <div className='text-white flex'>
//         <div className="flex p-10">
//             <img src={logo} alt="" className="w-28 h-6"/>
//             <ul className="flex  font-sans font-medium capitalize pl-10">
//                 <li className="pr-10">home</li>
//                 <li className="pr-10">tv shows</li>
//                 <li className="pr-10">movies</li>
//                 <li className="pr-10">new & popular</li>
//                 <li className="pr-10">My List</li>
//                 <li>Browse By Language</li>
//             </ul>
//         </div>
//         <div className="flex align-center">
//             <img src={search_icon} alt="" className="w-4"/>
//             <p>Children</p>
//             <img src={bell_icon} alt="" className="w-4"/>
//             <div className="flex">
//                 <img src={profile_icon} alt="" />
//                 <img src={caret_icon} alt="" />
//                 <div>
//                     <p>Sign Out of Netfkix</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import search_icon from "../Assets/assets/search_icon.svg";
import bell_icon from "../Assets/assets/bell_icon.svg";
import profile_icon from "../Assets/assets/profile_img.png";
import caret_icon from "../Assets/assets/caret_icon.svg";
import logo from "../Assets/assets/logo.png";

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center px-6 py-4'>
      {/* Left Side: Logo and Menu */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-28 h-6" />
        <ul className="flex ml-10 space-x-10 font-sans font-medium">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      
      {/* Right Side: Search, Notification, Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <img src={search_icon} alt="Search" className="w-6 h-6 cursor-pointer" />
        
        {/* Notification Bell */}
        <img src={bell_icon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
        
        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img src={profile_icon} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
          <img src={caret_icon} alt="Caret" className="w-4 h-4 cursor-pointer" />
          <div className="absolute bg-black text-white p-2 rounded mt-8 hidden group-hover:block">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
