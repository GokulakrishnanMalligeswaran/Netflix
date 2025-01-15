import React from 'react'
import hero_banner from "/hero_banner.jpg"
import hero_title from "../Assets/assets/hero_title.png"
import play_icon from "../Assets/assets/play_icon.png"
import info_icon from "../Assets/assets/info_icon.png"
import TitleCards from '../components/TitleCards'


const Home = () => {
  return (
    <div className="bg-black text-white-500 box-content ">
      <div className="text-white flex flex-col">
          <img src={hero_banner} alt="" className="relative object-fit"/>
          <div className="absolute align-bottom justify-end flex flex-col" >
              <img src={hero_title} alt=""  className="w-[300px]  justify-start "/>
              <p className="text-justify font-thin">After his adoptive father is killed, Hakan Demir, an Istanbul shopkeeper, discovers that he is connected to an ancient secret order whose duty is to protect the city. Hakan must embrace his family's legacy as the Protector, a hero with the duty to kill the Immortal and prevent the city's destruction</p>
              <div className="flex space-x-3 ">
                <button className=" flex  bg-white bg-opacity-40 pt-1 pb-1 pr-3 pl-3 align-text-top rounded-md ">
                  <img src={play_icon} alt=""  className="w-5 justify-center align-center "/>Play
                </button >
                <button className=" flex font-thin bg-black bg-opacity-50 pt-1 pb-1 pr-3 pl-3 text-center ml-4 rounded-md hover:cursor-pointer ">
                  <img src={info_icon} alt="" className="w-6"/>More Info
                </button>
              </div>
            </div>
        </div>
        <TitleCards title={"Blockbuster Movies"}/>
      <TitleCards title={"Only on Netflix"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top Pics for You"}/>
    
    </div>
  )
}

export default Home
