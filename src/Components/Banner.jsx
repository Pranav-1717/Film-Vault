import React from "react";
import '../App.css'

function Banner() {
  return (
    <div
      className="w-100 d-flex align-items-end justify-content-center"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/79/f4/b0/79f4b088ef0bc9f96574de8f0cfc26aa.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "540px",
      }}
    >
      <div className="bg-text-glassy  text-light p-3 w-100 text-center h-5">
        <h4>AVENGERS</h4>
      </div>
    </div>
  );
}

export default Banner;
