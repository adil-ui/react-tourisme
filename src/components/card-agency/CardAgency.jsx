import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { API_URL } from '../../config/constants'
import $ from 'jquery'
import axios from 'axios'
import AuthContext from '../../context/auth-context'


const CardAgency = ({ elt }) => {
    const { user } = useContext(AuthContext)
   
    const navigate = useNavigate();
    const [userRole, setuserRole] = useState('')
    useEffect(() => {
        if (user) {
            setuserRole(user?.role)
        }
    }, [])
    const submit = () => {
        if (!user) {
            navigate('/login')
        } else {
            const formData = new FormData();
            formData.append("name", elt?.name);
            formData.append("address", elt?.address);
            formData.append("picture", elt?.picture);
            formData.append("phone", elt?.phone);
            formData.append("email", elt?.email);
            formData.append("description", elt?.description);
            formData.append("longitude", elt?.longitude);
            formData.append("latitude", elt?.latitude);
            formData.append("role", 'Agence');
            formData.append("offer_id", elt?.id);
            formData.append("link", elt?.link);
            formData.append("price", elt?.price);
            formData.append("city", elt.city?.name);
            try {
                axios.post(API_URL + 'api/add-bookmark/' + user?.id, formData)
                    .then(response => {
                        console.log(response.data);
                        $(`#book_${elt?.id}`).css("display", "none");
                        $(`#bookk_${elt?.id}`).css("display", "flex");
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }

    const deleteBookmark = (id) => {
        axios.delete(API_URL + 'api/delete-bookmark/' + id)
            .then(response => {
                console.log(response);
                $(`#book_${elt?.id}`).css("display", "flex");
                $(`#bookk_${elt?.id}`).css("display", "none");
            });

    }

    return (
        <article className="col-xxl-3 col-md-4 col-sm-6 col-10 mb-4 mx-lg-0 mx-auto card_container" >
            <div className="card border-0">
                <div className='card_img position-relative'>
                    <NavLink to={`/agency-details/${elt.id}`}><img src={API_URL + elt?.picture} alt="user_image" className="" /></NavLink>
                    {user?.role === 'Tourist' || userRole === '' ?
                        <>
                            <div className='bookmarkIcon' id={`book_${elt?.id}`} onClick={() => submit()}><i class="fa-regular fa-bookmark "></i></div>
                            <div className='bookmarkIcon book' id={`bookk_${elt?.id}`} onClick={() => deleteBookmark(elt?.name)}><i class="fa-solid fa-bookmark "></i></div>
                        </>
                        : null
                    }

                </div>
                <div className="pt-3 px-2">
                    <Link to={`/agency-details/${elt.id}`} className='text-decoration-none '><h5 className="fw-semibold primaryColor">{elt.name}</h5></Link>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <p className='text-secondary fontSize16'><i class="bi bi-geo-alt-fill"></i> {elt.city?.name}</p>
                        {elt.price && <p className="fw-semibold text-danger fontSize14" ><span className='text-dark'>From</span>  {elt.price} Dh/day</p>}
                        {elt.tel && <p className="fw-semibold text-danger fontSize16" ><i class="bi bi-telephone-fill text-danger fontSize16 align-middle"></i> {elt?.phone} </p>}

                    </div>
                </div>
            </div>
        </article >
    )
}

export default CardAgency