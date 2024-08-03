import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import { useEffect, useState } from "react";

function App() {
  const[watchlist , setwatchlist] = useState([])

  let handelwatchlist = (movieObj)=>{
    let newwatchlist = [...watchlist , movieObj]
    localStorage.setItem('movieApp' , JSON.stringify(newwatchlist))
    setwatchlist(newwatchlist)
    console.log(newwatchlist)
  } 

  let removefromwatchlist = (movieObj)=>{
    let filterwatchlist = watchlist.filter((movies)=>{
      return movies.id !== movieObj.id
    })
    setwatchlist(filterwatchlist)
  }

  useEffect(()=>{
    let moviefromlocalstorage = localStorage.getItem('movieApp')
    if(!moviefromlocalstorage){
      return
    }
    setwatchlist(JSON.parse(moviefromlocalstorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist} handelwatchlist={handelwatchlist} removefromwatchlist={removefromwatchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setwatchlist={setwatchlist} removefromwatchlist={removefromwatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
