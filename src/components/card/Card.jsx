import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Card.css'
import { API_URL } from '../../config/constants'

const Card = ({ elt }) => {
    const stars = [];

    for (let i = 0; i < elt.star; i++) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }

    return (
        <article className="col-xxl-3 col-lg-4 col-md-6 col-sm-9 col-10 mb-4 mx-auto card_container " >
            <div className="card border-0">
                <div className='card_img'>
                    <NavLink to={`/details/${elt.id}`}><img src={API_URL + elt.picture} alt="user_image" className="" /></NavLink>
                </div>
                <div className="pt-3 px-2">
                    <Link to={`/details/${elt.id}`} className='text-decoration-none '><h5 className="fw-semibold primaryColor">{elt.name}</h5></Link>

                    {elt.star &&
                        <>
                            <p className='text-warning fontSize12 mb-0'>{stars}</p>
                            <p className='fw-semibold text-warning '>{elt.star}-star</p>
                        </>}
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <p className='text-secondary fontSize16'><i class="bi bi-geo-alt-fill"></i> {elt.city?.name}</p>
                        {elt.price && <p className="fw-semibold text-danger fontSize14" ><span className='text-dark'>From</span>  {elt.price} Dh/night</p>}
                        {elt.tel && <p className="fw-semibold text-danger fontSize16" ><i class="bi bi-telephone-fill text-danger fontSize16 align-middle"></i> {elt?.phone} </p>}

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card