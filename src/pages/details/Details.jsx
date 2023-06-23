import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config/constants';
import './Details.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const Details = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [notification, setNotification] = useState('');
    const params = useParams();
    const [property, setProperty] = useState(null);
    const [propertyPictures, setPropertyPictures] = useState([]);

    // useEffect(() => {
    //     fetch(API_URL + 'api/details/' + params.id)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result);
    //             setProperty(result.property[0]);
    //             setUserEmail(result.property[0].user.email);
    //             setPropertyPictures(result.PropertyPictures);

    //         })
    // }, []);


    const contact = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + 'api/contact-user', { name, email, phone, message, userEmail })
            setNotification(res.data.success)
        } catch (error) {
            setNotification(error.data.error)
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className='px-5 row my-5 py-4 mx-auto gx-2' >
            <div className='col-lg-8 mx-auto my-4 py-2 pe-5'>
                {property && propertyPictures.length > 0 && <div className='imageList border rounded-3 shadow-sm text-center pb-2'>
                    <div className='mx-auto mb-3'>
                        <Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2">

                            {[property, ...propertyPictures].map(elt => (
                                <SwiperSlide >
                                    <img src={API_URL + elt.picture} alt='img' className='img-fluid rounded-top-3' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper">
                        {[property, ...propertyPictures].map(elt => (
                            <SwiperSlide>
                                <img src={API_URL + elt.picture} alt="img" className='img-fluid' />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>}
                <div className='details  border rounded-3 shadow-sm p-4 my-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className="text-warning bg-warning px-3 py-1 rounded-5 bg-opacity-25 text-bold">{property?.type}</p>
                    </div>
  
                    <h3 className='fw-bold'>{property?.title}</h3>
                    <address className='text-secondary my-4 fontSize18'><i class="bi bi-geo-alt-fill text-danger"></i> Rabat, Maroc</address>
                
                </div>
                
                <div className='description  border rounded-3 shadow-sm p-4 pe-5 my-4'>
                    <h3 className='fw-bold'>Description</h3>
                    <p className='mt-3 lh-lg fontSize17' style={{textAlign:'justify'}}>{property?.description}</p>
                </div>
            </div>
            <div className='col-lg-4 my-4 py-2'>
               
                <div className='border rounded-3 shadow-sm' style={{ height: '300px' }}>
                    <h4 className='fw-bold m-3 text-center'>Emplacement</h4>
                    <iframe width="100%" height="450" id="gmap_canvas" src={`https://maps.google.com/maps?q= ${property?.latitude}, ${property?.longitude} &t=&z=16&ie=UTF8&iwloc=&output=embed`}
                        title='ma position' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 h-100 rounded-bottom-3 mx-auto'></iframe>

                </div>
            </div>
        </section>
    )
}

export default Details