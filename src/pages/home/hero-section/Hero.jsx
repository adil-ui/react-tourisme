import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='position-relative mb-5' >
      <div className="hero-back d-flex justify-content-center align-items-center" >
        <div className="carouselText d-none d-md-block  " >
          <h1 className='text-light text-carousel pb-2 fontSize60 fw-semibold' ><i>GUIDE TO MOROCCO</i>  </h1>
          <h1 className='text-light text-carousel  fw-semibold'>Morocco travel guide to help you prepare for your trip</h1>

          <div className="d-flex mt-5">
            <div className="me-0 w-50 mx-auto">
              <input type="email" className="form-control ps-3 fs-5 rounded-end-0 py-2 shadow-lg" id="exampleFormControlInput1" placeholder="Hotel, Guide, Info,..." />
            </div>
            <div className="form-group me-auto">
              <Link to={``} className="btn btn-danger px-4 fs-5 rounded-start-0 py-2 shadow-lg" ><i class="fa-solid fa-magnifying-glass me-2 fontSize19"></i> Search</Link>
            </div>
          </div>

        </div>

      </div>
      <div id="carouselExampleInterval" className="carousel slide carousel-fade h-100" data-bs-ride="carousel">

        <div className="carousel-inner">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          <div className="carousel-item position-relative active" data-bs-interval="5000">
            <img src="assets/slide-2.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
          <div className="carousel-item position-relative  " data-bs-interval="2000">
            <img src="assets/back.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
          <div className="carousel-item position-relative" data-bs-interval="5000">
            <img src="assets/slide-4.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Hero