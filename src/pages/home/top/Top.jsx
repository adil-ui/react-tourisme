import React, { useEffect, useState } from 'react'
import Card from '../../../components/card-hotel/Card'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../config/constants';
import CardAgency from '../../../components/card-agency/CardAgency';
import CardGuide from '../../../components/card-guide/CardGuide';

const Top = () => {
    const [hotels, setHotels]= useState([]);
    const [guides, setGuides]= useState([]);
    const [agences, setAgences]= useState([]);
    useEffect(() => {
        fetch(API_URL + "api/home")
            .then(response => response.json())
            .then(result => {
                setHotels(result.hotels);
                setGuides(result.guides);
                setAgences(result.agences);
            })
    }, [])
  
    const cars = [
        {
            id: 1,
            title: 'Las Vidas Car Rabat',
            picture: '/assets/voiture.png',
            tel: '0625145639',
            ville: 'Rabat',
        },
        {
            id: 2,
            title: 'Blue Line Car Rabat',
            picture: '/assets/voituree.jpg',
            tel: '0625145639',
            ville: 'Rabat',
        },
        {
            id: 3,
            title: 'Bab El Had Cars',
            picture: '/assets/voiture.png',
            tel: '0625145639',
            ville: 'Rabat',
        },
        {
            id: 4,
            title: 'Araba Location',
            picture: '/assets/voiture.jpg',
            tel: '0625145639',
            ville: 'Rabat',
        },


    ]
    const monuments = [
        {
            id: 1,
            title: 'La kasbah de Chefchaouen',
            picture: '/assets/monument-1.jpg',
            ville: 'Chefchaouen',
        },
        {
            id: 2,
            title: 'Le spectaculaire Palais Bahia',
            picture: '/assets/monument-2.jpg',
            ville: 'Marrakech',
        },
        {
            id: 3,
            title: 'Le mausolée Mohammed V',
            picture: '/assets/monument-3.jpg',
            ville: 'Rabat',
        },
        {
            id: 4,
            title: 'La mosquée Hassan II',
            picture: '/assets/monument-4.jpg',
            ville: 'Casablance',
        },


    ]
    return (
        <section className='my-5 pt-4 container' id='top'>
            <div>
                <h2 className='text-center  text-danger fw-semibold'>OUR HOTELS</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Guide to morocco</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{ height: '2px', width: '60px', }}></div>
                <div class="row">
                    {hotels.map(elt => <Card elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to='hotels' className='btn btn-primary px-4 py-2 fontSize18'>Discover more</Link>
                </div>
            </div>
            <div>
                <h2 className='text-center  mt-5 pt-5 text-danger fw-semibold'>OUR CAR RENTAL AGENCIES</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Guide to morocco</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{ height: '2px', width: '60px', }}></div>
                <div class="row">
                    {agences.map(elt => <CardAgency elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to='agencies' className='btn btn-primary px-4 py-2 fontSize18'>Discover more</Link>
                </div>
            </div>
            <div>
                <h2 className='text-center  mt-5 pt-5 text-danger fw-semibold'>OUR TOURIST GUIDESS</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Guide to morocco</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{ height: '2px', width: '60px', }}></div>
                <div class="row">
                    {guides.map(elt => <CardGuide elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to='guides' className='btn btn-primary px-4 py-2 fontSize18'>Discover more</Link>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-5 pt-5 text-danger fw-semibold'>TOP DESTINATIONS</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Guide to morocco</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{ height: '2px', width: '60px', }}></div>
                <div class="row">
                    {monuments.map(elt => <Card elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to="info" className='btn btn-primary px-4 py-2 fontSize18'>Discover more</Link>
                </div>
            </div>
        </section>
    )
}

export default Top