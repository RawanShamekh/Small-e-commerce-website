import React from 'react'
import img1 from './../../assets/3.jpg';
import img2 from './../../assets/2.jpg';

import img3 from './../../assets/1.jpg';
const stCar={
  height:'700px'
}

export const Slider = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} style={stCar}className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} style={stCar} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} style={stCar} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
