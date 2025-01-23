import hero_banner from "/hero_banner.jpg";
import hero_title from "../Assets/assets/hero_title.png";
import play_icon from "../Assets/assets/play_icon.png";
import info_icon from "../Assets/assets/info_icon.png";
import TitleCards from "../components/TitleCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" w-full ">
      <Navbar/>
      <div className="relative ">
        <img src={hero_banner} alt="" className=" w-full opacity-60" />
        <div className="absolute w-full p-8 bottom-4">
          <img src={hero_title} alt="" className=" w-[90%] max-w-[420px] mb-7" />
          <p className="w-[700px] text-[17px] mb-7 ">
            After his adoptive father is killed, Hakan Demir, an Istanbul
            shopkeeper, discovers that he is connected to an ancient secret
            order whose duty is to protect the city. Hakan must embrace his
            family's legacy as the Protector, a hero with the duty to kill the
            Immortal and prevent the city's destruction
          </p>
          <div className="flex space-x-3 mb-12">
            <button className=" flex  bg-white outline-none text-black px-3 py-1 align-text-top rounded-md ">
              <img
                src={play_icon}
                alt=""
                className="w-5 justify-center items-center mr-1"
              />
              Play
            </button>
            <button className=" inline-flex font-thin bg-black bg-opacity-50 text-white pt-1 pb-1 px-3  items-center ml-4 rounded-md gap-2 hover:cursor-pointer ">
              <img src={info_icon} alt="" className="w-6" />
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
