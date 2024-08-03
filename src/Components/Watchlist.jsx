import React, { useEffect, useState } from 'react'
import genreid from '../Info/genere'

function Watchlist({watchlist,removefromwatchlist,setwatchlist}) {

  const[search,setsearch] = useState('')
  const[generelist , setgenrelist] = useState(['All Genre'])
  const[currgenre,setgenre] = useState('All Genre')

  let handlesearch = (e)=>{
    setsearch(e.target.value)
  }

  let handlefilter = (genre)=>{
    setgenre(genre)
  }

  let sortincreasing = ()=>{
    let sortincresing = watchlist.sort((movieA , movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setwatchlist([...sortincresing])
  }

  
  let sortdecreasing = ()=>{
    let sortdecresing = watchlist.sort((movieA , movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setwatchlist([...sortdecresing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setgenrelist(['All Genre',...temp])
    console.log(temp)
  },[watchlist])
  

  return (
    <>
    <div className='d-flex justify-content-center flex-wrap m-4 gap-2'>
      {generelist.map((genre) => {
        return <div ><div onClick={()=>handlefilter(genre)} className={currgenre==genre?"btn btn-primary":"btns bg-faint-gray d-flex justify-content-center align-items-center"}>{genre}</div></div>
      })}
    </div>

    <div className='text-center'>
      <input onChange={handlesearch} type="text" placeholder='Search Movie' className='w-25 mt-4 p-2 bg-faint-gray border-0'/>
    </div>


    <div className='mt-5 '>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" className='d-flex  gap-2'>
        <div onClick={sortdecreasing}><i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        <div>Rating</div>
        <div onClick={sortincreasing}><i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        </th>
      <th scope="col"><div style={{ marginLeft: '1rem' }}>Popularity</div></th>
      <th scope="col"><div style={{ marginLeft: '1rem' }}>Genere</div></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {watchlist.filter((movieObj)=>{
      if(currgenre=='All Genre'){
        return true
      }
      else{
        return genreid[movieObj.genre_ids[0]]==currgenre
      }
    }).filter((movieObj)=>{
      return movieObj.title.toLowerCase().includes(search.toLowerCase())
    }).map((movieObj)=>{
      return   <tr>
      <th scope="row">
        <div className='d-flex align-items-center gap-1'>
        <img   src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} style={{height:'80px',width:'80px'}} alt="" />
        <p>{movieObj.title}</p>
        </div>
      </th>
      <td><div className='p-4'> {movieObj.vote_average}</div></td>
      <td><div className='p-4'>{movieObj.popularity}</div></td>
      <td><div className='p-4'>{genreid[movieObj.genre_ids[0]]}</div></td>
      <td>
        <div onClick={()=>removefromwatchlist(movieObj)}  style={{ cursor: 'pointer',color:'red' }}> <div className='p-4'>delete</div> </div></td>
    </tr>
    })}
  
  </tbody>
</table>
    </div>
    </>
  )
}

export default Watchlist