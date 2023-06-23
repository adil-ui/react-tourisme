
import { useEffect, useState } from 'react';
import { API_URL } from '../../config/constants';
import './Dashboard.css'

const Dashboard = () => {
    const [properties, setProperties] = useState([])
    const [nbrUsers, setNbrUsers] = useState(0)
    const [nbrProperty, setNbrProperty] = useState(0)
    const [nbrCategory, setnbrCategory] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'));

    // useEffect(() => {
    //     fetch(API_URL + "api/last-properties", {
    //         headers: {
    //             'Authorization': `Bearer ${user.token}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             setProperties(result.properties);
    //             setNbrUsers(result.nbrUser);
    //             setNbrProperty(result.nbrProperty);
    //             setnbrCategory(result.nbrCategory);
    //         })
    // }, [])
    return (
        <section className=" g-0 mx-auto col-8 mt-5 pt-2 dashboard_container" >
            <div className="row gx-2 ">
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-info row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrUsers}</p>
                            {nbrUsers > 1 ? <p className='fw-semibold fs-5'>Utilisateurs</p> :
                                <p className='fw-semibold fs-5'>Utilisateur</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-people-fill fontSize60 text-info"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-success row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrProperty}</p>
                            {nbrProperty > 1 ? <p className='fw-semibold fs-5'>Hôtels</p> :
                                <p className='fw-semibold fs-5'>Hôtel</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-hotel fontSize60 text-success"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-warning row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrCategory}</p>
                            {nbrCategory > 1 ? <p className='fw-semibold fs-5'>Agences</p> :
                                <p className='fw-semibold fs-5'>Agence</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-car-rear fontSize60 text-warning"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-secondary row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrCategory}</p>
                            {nbrCategory > 1 ? <p className='fw-semibold fs-5'>Monuments</p> :
                                <p className='fw-semibold fs-5'>Monument</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-landmark fontSize60 primaryColor"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-danger row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrUsers}</p>
                            {nbrUsers > 1 ? <p className='fw-semibold fs-5'>Guides</p> :
                                <p className='fw-semibold fs-5'>Guide</p>
                            }
                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-regular fa-compass fontSize60 text-danger"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 col-10 mb-5 mx-lg-0 mx-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-dark border-opacity-50 row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>{nbrProperty}</p>
                            {nbrProperty > 1 ? <p className='fw-semibold fs-5'>Villes</p> :
                                <p className='fw-semibold fs-5'>Ville</p>
                            }

                        </div>
                        <div className='col-6 text-end'>
                            <i class="fa-solid fa-city fontSize60 text-secondary"></i>
                        </div>
                    </div>
                </div>
            </div>
      
            <div >
                <h4 className='fw-semibold '>Les derniers offres</h4>
                <div class="table-responsive mx-auto my-table rounded-3 border shadow-sm  mt-3">
                    <table class="table bg-white table-hover  rounded-3  m-0">
                        <thead>
                            <tr>
                                <th scope="col" className='primaryColor'>#</th>
                                <th scope="col" className='primaryColor'>Photo</th>
                                <th scope="col" className='primaryColor'>Titre</th>
                                <th scope="col" className='primaryColor'>Prix</th>
                                <th scope="col" className='primaryColor'>Propriétaire</th>
                                <th scope="col" className='primaryColor'>Categorie</th>
                                <th scope="col" className='primaryColor'>Type</th>
                                <th scope="col" className='primaryColor'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {properties.map(annonce => (
                                <>
                                    <tr>
                                        <th scope="row" className="align-middle">{annonce.id}</th>
                                        <td className="align-middle">
                                            <img src={API_URL + annonce.picture} className="img-fluid rounded-circle" alt="property_picture" width='42px' style={{ height: '42px' }} />
                                        </td>
                                        <td className="align-middle">{annonce.title}</td>
                                        <td className="align-middle">{annonce.price} Dh</td>
                                        <td className="align-middle">{annonce.user.name}</td>
                                        <td className="align-middle">{annonce.category?.name}</td>
                                        <td className="align-middle">{annonce.type}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-success me-1"><i class="bi bi-eye-fill" data-bs-toggle="modal" data-bs-target={`#details-${annonce.id}`}></i></button>
                                        </td>
                                    </tr>

                                </>


                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
}

export default Dashboard