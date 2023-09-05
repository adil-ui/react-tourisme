import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { API_URL } from '../../config/constants'
import $ from 'jquery'
const book = (id) =>{

        $(`#book_${id}`).css("display", "none");
        $(`#bookk_${id}`).css("display", "block");

}

const CardInfo = ({ elt }) => {

    return (
        <article className="col-xxl-3 col-lg-4 col-md-6 col-sm-9 col-10 mb-4 mx-auto card_container " >
        <div className="card border-0">
            <div className='card_img position-relative'>
                <NavLink to={`/info-details/${elt.id}`}><img src={API_URL + elt.picture} alt="user_image" className="" /></NavLink>
                <div class="bookmarkIcon" onClick={() => book(elt?.id)}>
                    <div id={`book_${elt?.id}`} ><i class="fa-regular fa-bookmark "></i></div>
                    <div className='book' id={`bookk_${elt?.id}`} ><i class="fa-solid fa-bookmark "></i></div>
                </div>
            </div>
            <div className="pb-2 pt-3 px-2">
                <Link to={`/info-details/${elt.id}`} className='text-decoration-none '><h6 className="fw-semibold primaryColor">{elt.title}</h6></Link>
            </div>
        </div>
    </article >
    )
}

export default CardInfo