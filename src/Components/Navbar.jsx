import React from 'react'
import Logo from '../image.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="d-flex align-items-center gap-4 border">
         <img src={Logo} alt="" style={{ width: '80px', height: '80px' }}/>
         <Link to="/" className="fw-bold fs-4 text-decoration-none">Home</Link>
         <Link to="/watchlist" className="fw-bold fs-4 text-decoration-none">WatchList</Link>
    </div>
  )
}

export default Navbar