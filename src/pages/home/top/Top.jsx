import React, { useEffect, useState } from 'react'
import Card from '../../../components/card-hotel/Card'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../config/constants';
import CardAgency from '../../../components/card-agency/CardAgency';
import CardGuide from '../../../components/card-guide/CardGuide';
import CardInfo from '../../../components/card-info/CardInfo';

const Top = () => {
    const [hotels, setHotels]= useState([]);
    const [guides, setGuides]= useState([]);
    const [agences, setAgences]= useState([]);
    const [informations, setInformations]= useState([]);
    useEffect(() => {
        fetch(API_URL + "api/home")
            .then(response => response.json())
            .then(result => {
                setHotels(result.hotels);
                setGuides(result.guides);
                setAgences(result.agences);
                setInformations(result.informations);
            })
    }, [])
  

    
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
                    {informations.map(elt => <CardInfo elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to="practical-info" className='btn btn-primary px-4 py-2 fontSize18'>Discover more</Link>
                </div>
            </div>
        </section>
    )
}

export default Top