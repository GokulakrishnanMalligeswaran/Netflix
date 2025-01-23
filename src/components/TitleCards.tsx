import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// interface ApiResponse {
//   dates: {
//     maximum: string;
//     minimum: string;
//   };
//   page: number;
//   results: Movie[];
//   total_pages: number;
//   total_results: number;
// }


const TitleCards = ({title,category}:{title?:string;category:string}) => {
  const [apiData,setApiData]=useState<Movie[]>([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTY5MmQyNDA4YWNkODc5MWM1OTQwNzg2MDIyNjI0MCIsIm5iZiI6MTczNzYzNjY4MS43NDcsInN1YiI6IjY3OTIzYjQ5N2FmMjM1MjZkNzQ3MDM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.idmTw0uj0zb3gcXH0Aq0juU9dGnUnDNH7CcJT_TFaSw'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div>
      <h2 className="mb-2 text-[28px] pl-3">{ title?title:"Popular on Netflix"}</h2>
    <div className="w-full my-3 overflow-x-scroll whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"> 
      <div className="flex box-content">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index} className="relative  px-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path}
                alt=""
                className="min-w-60  rounded cursor-pointer opacity-60"
              />
              <p className="absolute bottom-2 left-2">{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default TitleCards;
