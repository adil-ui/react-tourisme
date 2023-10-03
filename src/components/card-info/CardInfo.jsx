import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { API_URL } from '../../config/constants'
import $ from 'jquery'
import axios from 'axios'
import AuthContext from '../../context/auth-context'


const CardInfo = ({ elt }) => {
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

            formData.append("picture", elt?.picture);
            formData.append("description", elt?.description);
            formData.append("name", elt?.title);
            formData.append("role", 'Info');
            formData.append("offer_id", elt?.id);

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
        <article className="col-xxl-3 col-md-4 col-sm-6 col-10 mb-4 mx-lg-0 mx-auto card_container " >
            <div className="card border-0">

                <div div className='card_img position-relative'>
                    <NavLink to='' data-bs-toggle="modal" data-bs-target={`#exampleModal${elt?.id}`}><img src={API_URL + elt?.picture} alt="user_image" className="" /></NavLink>
                    {userRole === 'Tourist' || userRole === '' ?
                        <>
                            <div className='bookmarkIcon' id={`book_${elt?.id}`} onClick={() => submit()}><i class="fa-regular fa-bookmark "></i></div>
                            <div className='bookmarkIcon book' id={`bookk_${elt?.id}`} onClick={() => deleteBookmark(elt?.name)}><i class="fa-solid fa-bookmark "></i></div>
                        </>
                        : null
                    }

                </div>

                <div className="pb-2 pt-3 px-2 ">
                    <NavLink className='text-decoration-none' to='' data-bs-toggle="modal" data-bs-target={`#exampleModal${elt?.id}`}><h6 className="fw-semibold primaryColor">{elt?.title}</h6></NavLink>
                </div>
                <div className="modal fade h-75 mt-5" id={`exampleModal${elt?.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content pb-4">
                            <div className="modal-header border-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body py-1">
                                <div className='d-flex justify-content-between  modal_container'>
                                    <div className='me-4 modal_img' >
                                        <img src={API_URL + elt?.picture} className='' style={{ width: '350px' }} alt="info_picture" />
                                    </div>
                                    <div className='modal_text'>
                                        <h4 className='fw-bold'>{elt?.title}</h4>
                                        <p className='fontSize17 lh-base'>{elt?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </article >
    )
}

export default CardInfo