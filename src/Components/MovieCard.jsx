import React from "react";
import "../App.css";

function MovieCard({
  poster_path,
  name,
  movieObj,
  handelwatchlist,
  removefromwatchlist,
  watchlist,
}) {
  function doescontain(movieObj) {
    return watchlist.some((movie) => movie.id === movieObj.id);
  }

  return (
    <div
      className="rounded p-10 movie-card mt-3 d-flex flex-column justify-content-between align-items-end"
      style={{
        width: "170px",
        height: "300px",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {doescontain(movieObj) ? (
        <div onClick={() => removefromwatchlist(movieObj)} className="rounded-circl bg-text-glassy p-0">
          &#10060;
        </div>
      ) : (
        <div onClick={() => handelwatchlist(movieObj)} className="rounded-circl bg-text-glassy p-0">
          &#128525;
        </div>
      )}
      
      {/* <div onClick={()=>(handelwatchlist(movieObj))} className='rounded'>&#128525;</div> */}
      <div className="bg-text-glassy  text-light  w-100 small text-center">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
