import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../axios';

function Row({title,fetchUrl,isLarge=false}) {
    const[movies,setMovie]=useState([]);
    const base_URL=`https://image.tmdb.org/t/p/original`;
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData()

    },[fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
        {movies.map((movie)=>
        <img 
        className={`row__poster ${isLarge && "row__posterLarge"}`}
        src={`${base_URL}${
            isLarge ?movie.poster_path:movie.backdrop_path
        }`} alt={movie.name}/>
        )}
        </div>
        
    </div>
  )
}

export default Row