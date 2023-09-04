import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom'
import { API_URL } from '../../config/constants';
import './Details.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const DetailsHotel = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const [dataRelated, setDataRelated] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'api/details-hotel/' + params.id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setData(result.hotel[0]);
                setDataRelated(result.hotelRelated);
            })
    }, []);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    const stars = [];

    for (let i = 0; i < dataRelated?.star; i++) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    const myStars = [];

    for (let i = 0; i < data?.star; i++) {
        myStars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return (
        <section className='px-5 row my-5 py-5 mx-auto gx-2' >
            <div className='col-lg-8 mx-auto my-4 py-2 pe-5'>
                <div>
                    <img src={API_URL + data?.picture} alt="user_image" className='img-fluid  w-100 rounded-3 shadow' />
                </div>
                <div className='details  border rounded-3 shadow-sm p-4 my-4'>
                    <div style={{ width: '120px' }} className='bg-success rounded-5 bg-opacity-25 border d-flex justify-content-center align-center px-3 py-1'>
                        <p className='text-success p-0 m-0 fw-semibold'> {data?.city?.name}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <h3 className='fw-bold'>{data?.name}</h3>
                        <h5 className="fw-semibold text-danger " ><span className='text-dark'>From</span>  {data?.price} Dh/night</h5>
                    </div>
                    <p className='text-warning fontSize18 my-2'>{myStars}</p>
                    <div className='d-flex justify-content-between align-items-center my-2'>
                        <address className='fw-semibold fontSize20'><i class="bi bi-geo-alt-fill text-danger"></i> {data?.address}</address>
                        <p className="fw-semibold fontSize20" ><i class="bi bi-telephone-fill text-success  align-middle"></i> {data?.phone} </p>
                    </div>
                    <Link to={data?.link} target='_blank' className='text-dark fontSize20 text-decoration-none '><i className="fa-solid fa-globe"></i> Visit the website</Link>

                </div>

                <div className='border rounded-3 shadow-sm p-4 pe-5 my-4'>
                    <h3 className='fw-bold'>Description</h3>
                    <p className='mt-3 lh-lg fontSize18' style={{ textAlign: 'justify' }}>{data?.description}</p>
                </div>
            </div>
            <div className='col-lg-4 my-4 py-2'>
                <div className='mb-4'>
                    <h4 className='fw-bold mb-3'>Related hotels</h4>
                    {dataRelated.map(elt =>
                    <div className='row g-0 shadow-sm  border rounded-2 mb-2'>
                        <div className='col-4'>
                            <NavLink to={`/hotel-details/${elt?.id}`}><img src={API_URL + elt?.picture} alt="hotel_image" className="related-img rounded-start-2" /></NavLink>
                        </div>
                        <div className='col-8 px-1 pt-2'>
                            <Link to={`/hotel-details/${elt?.id}`} className='text-decoration-none mb-0'><h6 className="fw-semibold primaryColor">{elt?.name}</h6></Link>
                            <p className='text-warning fontSize12 mb-0'>{stars}</p>
                            <p className='fw-semibold text-warning mb-0'>{elt?.star}-star</p>
                            <p className="fw-semibold text-danger fontSize14 mb-0 pb-0" ><span className='text-dark'>From</span>  {elt?.price} Dh/night</p>

                        </div>
                    </div>
                     )}
                </div>

                <div className='border rounded-3 shadow-sm' style={{ height: '300px' }}>
                    <h4 className='fw-bold m-3'>Emplacement</h4>
                    <iframe width="100%" height="450" id="gmap_canvas" src={`https://maps.google.com/maps?q= ${data?.latitude}, ${data?.longitude} &t=&z=16&ie=UTF8&iwloc=&output=embed`}
                        title='ma position' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 h-100 rounded-bottom-3 mx-auto'></iframe>

                </div>
            </div>
        </section>
    )
}

export default DetailsHotel