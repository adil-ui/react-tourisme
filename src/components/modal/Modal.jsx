import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/constants'

const Modal = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'api/details-information/' + id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setData(result.information[0]);
            })
    }, []);

    return (
        <div className="modal fade" id={`exampleModal${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='me-5' style={{ width: '1800px' }}>
                                <img src={API_URL + data?.picture} className="align-middle img-fluid" alt="info_picture" />
                            </div>
                            <div>
                                <h4 className='fw-bold'>{data?.title}</h4>
                                <p className='fontSize17 lh-base'>{data?.description}</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal