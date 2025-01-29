import hero_banner from "/hero_banner.jpg";
import hero_title from "../Assets/assets/hero_title.png";
import play_icon from "../Assets/assets/play_icon.png";
import info_icon from "../Assets/assets/info_icon.png";
import TitleCards from "../components/TitleCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" w-full  ">
      <Navbar/>
      <div className="relative ">
        <img src={hero_banner} alt="" className=" min-w-full opacity-60 max-xs:h-72 object-cover" />
        <div className="absolute w-full p-8 -bottom-4">
          <img src={hero_title} alt="" className=" max-w-48 mb-4 max-xs:w-72 max-sm:w-48 max-sm:h-1/2 md:min-w-96 " />
          <p className=" max-sm:font-thin text-sm text-justify max-xs:hidden">
            After his adoptive father is killed, Hakan Demir, an Istanbul
            shopkeeper, discovers that he is connected to an ancient secret
            order whose duty is to protect the city. Hakan must embrace his
            family's legacy as the Protector, a hero with the duty to kill the
            Immortal and prevent the city's destruction
          </p>
          <div className="flex space-x-3 max-sm:-mb-3 mt-2">
            <button className=" w-14 h-6  bg-white outline-none text-black px-3 align-text-top rounded-md 
            flex justify-center items-center max-sm:[text-sm px-3]">
              <img
                src={play_icon}
                alt=""
                className="w-5 justify-center items-center mr-1 max-sm:w-3"
              />
              Play
            </button>
            <button className="w-18 h-6 font-thin bg-black bg-opacity-50 text-white pt-1 pb-1 px-3  items-center ml-4 rounded-md  flex text-xs  hover:cursor-pointer ">
              <img src={info_icon} alt="" className="w-5" />
               More Info
            </button>
          </div>
        </div>
      </div>
      <TitleCards category={"top_rated"} title={"Blockbuster Movies"}/>
      <TitleCards category={"popular"} title={"Only on Netflix"}/>
      <TitleCards category={"upcoming"} title={"Upcoming"}/>
      <TitleCards category={"now_playing"} title={"Top pics for you"}/>
      <Footer/>
    </div>
     

  );
};

export default Home;
