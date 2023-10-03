import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Card.css'
import { API_URL } from '../../config/constants'
import $ from 'jquery'
import axios from 'axios'
import AuthContext from '../../context/auth-context'


const CardBookmark = ({ elt }) => {
    const stars = [];
    const [path, setPath] = useState('')
    useEffect(() => {
        if (elt?.role === 'Hotel') {
            setPath('hotel')
        } else if (elt?.role === 'Agence') {
            setPath('agency')
        } else if (elt?.role === 'Guide') {
            setPath('guide')
        }
    }, [])

    for (let i = 0; i < elt.star; i++) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    const deleteBookmark = (id) => {
        axios.delete(API_URL + 'api/delete-bookmark/' + id)
            .then(response => {
                console.log(response);
                $(`#bookk_${elt?.id}`).css("display", "none");
            });
    }
    return (
        <article className="col-xxl-3 col-md-4 col-sm-6 col-10 mb-4 mx-lg-0 mx-auto card_container " id={`bookk_${elt?.id}`}>
            <div className="card border-0">
                <div className='card_img position-relative'>
                    <NavLink to={`../../${path}-details/${elt?.offer_id}`}><img src={API_URL + elt?.picture} alt="bookmark_image" className="" /></NavLink>
                    <div className='bookmarkIcon' onClick={() => deleteBookmark(elt?.name)}><i class="fa-solid fa-bookmark "></i></div>

                </div>
                <div className="pt-3 px-2">
                    <Link to={`./../${path}-details/${elt?.offer_id}`} className='text-decoration-none '><h5 className="fw-semibold primaryColor">{elt.name}</h5></Link>

                    <div className='d-flex justify-content-between align-items-center mt-3'>


                    </div>
                </div>
            </div>
        </article >
    )
}

export default CardBookmark