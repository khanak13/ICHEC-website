import React from 'react'
import i1 from './images/1.png'
import i2 from './images/2.png'
import i3 from './images/3.png'
import i4 from './images/4.png'
import logo from './images/logo.png'
import "./style/text.css";
export default function Caroule() {

  
  return (
<div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-wrap="true">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={i1} className="w-100 img-fluid myimg" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src={i2} className="w-100 img-fluid myimg" alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src={i3} className="w-100 img-fluid myimg" alt="..."/>
 
    </div>
        <div className="carousel-item">
      <img src={i4} className="w-100 img-fluid myimg"  alt="..."/>
 
    </div>
    
    <div class="z5 carousel-caption d-flex flex-column justify-content-center h-100 w-100" style={{top: 0}}>
      <div className="text-center"><br/>
        <img src={logo} alt="..." style={{width: '150px', height: '150px', position: 'relative'}}/>
      <br/></div>
          
          <p id="p1" className="fs-1">INTERNATIONAL CONFERENCE ON SEPARATION AND PURIFICATION TECHNOLOGIES (ICSPT)</p>
          <p id="p2" className="fs-5">7-8th December, 2023</p>
      
      <br/>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
  )
}
