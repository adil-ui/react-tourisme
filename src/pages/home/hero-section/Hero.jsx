import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='position-relative hero mb-5' >
      <div className="hero-back pt-5 mt-5" >
        <div className="carouselText d-none d-md-block mt-5 pt-5 " >
          <h1 className='text-light text-carousel mt-5 pt-5 pb-2 fontSize60 fw-semibold' >Votre Guide au Maroc</h1>
          <p className='text-light text-carousel fontSize35 fw-semibold'>Construisons ensemble votre voyage sur mesure au Maroc</p>

          <div className="d-flex mt-5">
            <div className="me-0 w-50 mx-auto">
              <input type="email" className="form-control ps-3 fs-5 rounded-end-0 py-2" id="exampleFormControlInput1" placeholder="Ville, Voiture, Hôtel,..." />
            </div>
            <div className="form-group me-auto">
              <Link to={``} className="btn btn-danger px-5 fs-5 rounded-start-0 py-2" >Trouver</Link>
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
          <div className="carousel-item position-relative active " data-bs-interval="3000">
            <img src="/assets/slide-1.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
          <div className="carousel-item position-relative" data-bs-interval="3000">
            <img src="/assets/slide-2.jpg" className="d-block slide_img w-100" alt="..." />

          </div>
          <div className="carousel-item position-relative" data-bs-interval="3000">
            <img src="/assets/slide-3.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
          <div className="carousel-item position-relative" data-bs-interval="3000">
            <img src="/assets/slide-4.jpg" className="d-block slide_img w-100" alt="..." />
          </div>
        </div>
       
      </div>
    </div>

  )
}

export default Hero