import React from 'react'
import Card from '../../../components/card/Card'
import { Link } from 'react-router-dom'

const Top = () => {
    const hotels = [
        {
            id: 1,
            title: 'Luxury Tented Erg Chebbi',
            picture: '/assets/hotel-1.jpg',
            price: 300,
            star: 3,
            ville: 'Marzouga',
        },
        {
            id: 2,
            title: 'Farah Rabat',
            picture: '/assets/hotel-2.jpg',
            price: 300,
            star: 3,
            ville: 'Rabat',
        },
        {
            id: 3,
            title: "Les Mérinides",
            picture: '/assets/hotel-3.jpg',
            price: 300,
            star: 3,
            ville: 'Fès',
        },
        {
            id: 4,
            title: 'Waves Aqua Resort',
            picture: '/assets/hotel-4.jpg',
            price: 300,
            star: 3,
            ville: 'Kénitra',
        },
    ]
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
        <section className='my-5 pt-4 container'>
            <div>
                <h2 className='text-center  text-danger fw-semibold'>MEILLEURS HÔTELS</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Visite au Maroc</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{height:'2px', width: '60px',}}></div>
                <div class="row">
                    {hotels.map(elt => <Card elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to="" className='btn btn-primary px-4 py-2 fontSize18'>Découvrir plus</Link>
                </div>
            </div>

            <div>
                <h2 className='text-center  mt-5 pt-5 text-danger fw-semibold'>MEILLEURS AGENCES DE VOITURES</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Visite au Maroc</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{height:'2px', width: '60px',}}></div>
                <div class="row">
                    {cars.map(elt => <Card elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to="" className='btn btn-primary px-4 py-2 fontSize18'>Découvrir plus</Link>
                </div>
            </div>

            <div>
                <h2 className='text-center mt-5 pt-5 text-danger fw-semibold'>MEILLEURS DESTINATIONS</h2>
                <h6 className='text-center mb-3  primaryColor fw-semibold'>Visite au Maroc</h6>
                <div className=' bgColor mb-5 mx-auto rounded-5' style={{height:'2px', width: '60px',}}></div>
                <div class="row">
                    {monuments.map(elt => <Card elt={elt} />)}
                </div>
                <div className='text-center mt-3'>
                    <Link to="" className='btn btn-primary px-4 py-2 fontSize18'>Découvrir plus</Link>
                </div>
            </div>
        </section>
    )
}

export default Top