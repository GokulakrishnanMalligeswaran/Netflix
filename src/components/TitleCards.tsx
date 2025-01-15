import React, { useEffect, useRef } from 'react'
import cards_data from "../Assets/assets/cards/Cards_data.js"


const TitleCards = ({title}) => {
    const cardsRef=useRef<HTMLDivElement>(null);
const handleWheel=(event:React.WheelEvent<HTMLDivElement>)=>{
    event.preventDefault();
    if(cardsRef.current){
    cardsRef.current.scrollLeft +=event.deltaY;
    }
}
useEffect(()=>{
    if(cardsRef.current)
    cardsRef.current.addEventListener('wheel',handleWheel);
return ()=>{
    if(cardsRef.current){
        cardsRef.current.removeEventListener('wheel',handleWheel);
    }
}
},[])

  return (
    <div className="text-white m-5 mt-8">
        <h2 className="font-bold">{title?title:"Popular on Netflix"}</h2>
        <div className="flex space-x-4 whitespace-nowrap" ref={cardsRef}>
        {cards_data.map((card,index)=>{
            return <div key={index} className="flex flex-col   " >
                <img src={card.image} alt="" className="w-[350px] h-[200px] p-2 relative" />
                <p className="absolute ">{card.name}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default TitleCards