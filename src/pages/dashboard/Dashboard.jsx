
import { useEffect, useState } from 'react';
import { API_URL } from '../../config/constants';
import './Dashboard.css'
import axios from 'axios';

const Dashboard = () => {

    const [nbrUsers, setNbrUsers] = useState(0)
    const [nbrHotels, setNbrHotels] = useState(0)
    const [nbrCategory, setNbrCategory] = useState(0)
    const [nbrCity, setNbrCity] = useState(0)
    const [nbrGuide, setNbrGuide] = useState(0)
    const [nbrAgency, setNbrAgency] = useState(0)
    const [nbrInfo, setNbrInfo] = useState(0)
    const [nbrEmployes, setNbrEmployes] = useState(0)
    const [nbrMonuments, setNbrMonuments] = useState(0)
    const [nbrInscriptions, setNbrInscriptions] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        axios.get(API_URL + "api/stats")
            .then(result => {
                console.log(result);
                setNbrHotels(result.data.hotels);
                setNbrUsers(result.data.users);
                setNbrCity(result.data.cities);
                setNbrCategory(result.data.categories);
                setNbrGuide(result.data.guides);
                setNbrAgency(result.data.agencies);
                setNbrInfo(result.data.informations);
                setNbrEmployes(result.data.employees);
                setNbrMonuments(result.data.monuments);
                setNbrInscriptions(result.data.inscriptions);
            })
    }, [])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className=" g-0 mx-auto col-8 mt-5 pt-4 dashboard_container" >
            <div className="row gx-2 ">
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-success row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrUsers}</p>
                            {nbrUsers > 1 ? <p className='fw-semibold fs-5'>Utilisateurs</p> :
                                <p className='fw-semibold fs-5'>Utilisateur</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-people-fill fontSize60 text-success"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-warning row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrEmployes}</p>
                            {nbrEmployes > 1 ? <p className='fw-semibold fs-5'>Employés</p> :
                                <p className='fw-semibold fs-5'>Employé</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i className="fa fa-user-tie fontSize60 text-warning"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-danger row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrInscriptions}</p>
                            {nbrInscriptions > 1 ? <p className='fw-semibold fs-5'>Inscriptions</p> :
                                <p className='fw-semibold fs-5'>Inscription</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i className="fa-solid fa-rectangle-list fontSize60  text-danger"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-danger row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrGuide}</p>
                            {nbrGuide > 1 ? <p className='fw-semibold fs-5'>Guides</p> :
                                <p className='fw-semibold fs-5'>Guide</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-regular fa-compass fontSize60 text-danger"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-success row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrAgency}</p>
                            {nbrAgency > 1 ? <p className='fw-semibold fs-5'>Agences</p> :
                                <p className='fw-semibold fs-5'>Agence</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-car-rear fontSize60 text-success"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-warning row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrHotels}</p>
                            {nbrHotels > 1 ? <p className='fw-semibold fs-5'>Hôtels</p> :
                                <p className='fw-semibold fs-5'>Hôtel</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-hotel fontSize60 text-warning"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-warning row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrCategory}</p>
                            {nbrCategory > 1 ? <p className='fw-semibold fs-5'>Catégories</p> :
                                <p className='fw-semibold fs-5'>Catégories</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-tags-fill fontSize60 text-warning "></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-danger row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrInfo}</p>
                            {nbrInfo > 1 ? <p className='fw-semibold fs-5'>Informations</p> :
                                <p className='fw-semibold fs-5'>Information</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-circle-info fontSize60 text-danger"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-success row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrCity}</p>
                            {nbrCity > 1 ? <p className='fw-semibold fs-5'>Villes</p> :
                                <p className='fw-semibold fs-5'>Ville</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-city fontSize60 text-success"></i>

                        </div>
                    </div>
                </div>


            </div>


        </section>

    )
}

export default Dashboard