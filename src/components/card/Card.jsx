import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Card.css'

const Card = ({ elt }) => {


    return (
        <article className="col-xxl-3 col-lg-4 col-md-6 col-sm-9 col-10 mb-4 mx-auto card_container " >
            <div className="card border-0">
                <div className='card_img'>
                    <NavLink to={`/details/${elt.id}`}><img src={elt.picture} alt="user_image" className="" /></NavLink>
                </div>
                <div className="pt-3 px-2">
                    <Link to={`/details/${elt.id}`} className='text-decoration-none '><h5 className="fw-semibold primaryColor">{elt.title}</h5></Link>

                    {elt.star &&
                        <>
                            <p className='text-warning fontSize12 mb-0'><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></p>
                            <p className='fw-semibold text-warning '>{elt.star} star</p>
                        </>}
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <p className='text-secondary fontSize16'><i class="bi bi-geo-alt-fill"></i> {elt.ville}</p>
                        {elt.price && <p className="fw-semibold text-danger fontSize15" ><span className='text-dark'>From</span>  {elt.price} Dh/night</p>}
                        {elt.tel && <p className="fw-semibold text-danger fontSize16" ><i class="bi bi-telephone-fill text-danger fontSize16 align-middle"></i> {elt?.tel} </p>}

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card