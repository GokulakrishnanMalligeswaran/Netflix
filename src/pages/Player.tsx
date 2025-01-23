import { useEffect, useState } from "react";
import back_arrow_icon from "../Assets/assets/back_arrow_icon.png"
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [apiData,setApiData]=useState({name:"",key:"",published_at:"",typeof:""})
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY5MmQyNDA4YWNkODc5MWM1OTQwNzg2MDIyNjI0MCIsIm5iZiI6MTczNzYzNjY4MS43NDcsInN1YiI6IjY3OTIzYjQ5N2FmMjM1MjZkNzQ3MDM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.idmTw0uj0zb3gcXH0Aq0juU9dGnUnDNH7CcJT_TFaSw'
        }
      };
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[])
      
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <img src={back_arrow_icon} alt="" className="absolute top-5 left-5 w-12 cursor-pointer" onClick={()=>{navigate(-2)}}/>
        <iframe  className="w-11/12 h-screen rounded-xl" src={`https://www.youtube.com/embed/${apiData.key}`} title="teaser"  allowFullScreen></iframe>
        <div className="flex justify-between items-center w-11/12">
            <p className="justify-self-start">{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.typeof}</p>
        </div>
    </div>
  )
}

export default Player