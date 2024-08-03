import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handelwatchlist,removefromwatchlist,watchlist}) {

    const[movies,setMovies] = useState([])
    const[pageNo , setpageNo] = useState(1)

    const handleprev = ()=>{
      if(pageNo===1){
        setpageNo(pageNo)
      }
      else{
        setpageNo(pageNo-1);
      }
    }

    const handlenext = ()=>{
      setpageNo(pageNo+1);
    }

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4165bf1c052579f389fda3a35eda468b&language=en-US&page=${pageNo}`).then(function(res){
        setMovies(res.data.results.slice(0,16))
      })
    },[pageNo])

  return (
    <div>
      <div className='text-center fs-5 p-3'>Trending Movies</div>
      <div className='p-3 d-flex justify-content-between flex-wrap'>
       {movies.map((movieObj)=>{
        return <MovieCard key={movieObj.id} watchlist={watchlist} movieObj={movieObj} handelwatchlist={handelwatchlist} removefromwatchlist={removefromwatchlist} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
       })}
        
      </div>
      <div className='text-center p-2 bg-secondary border'>
        <Pagination pageNo={pageNo} handleprev={handleprev} handlenext={handlenext} />
      </div>
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=4165bf1c052579f389fda3a35eda468b&language=en-US&page=1