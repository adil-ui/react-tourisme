import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (

        <nav className="navbar fixed-top navbar-expand-xl  bg-white py-1 shadow-sm" >
            <div className="container-fluid " >
                <NavLink to="/" className="navbar-brand fw-bolder ms-5" ><img src="/assets/logo.png" alt="logo" width="130px" /></NavLink>
                <button className="navbar-toggler bg-light me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2  ms-auto pe-5" >

                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='/' >Accueil</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor" to='les-hotels' >Hôtels</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='les-agences' >Agences de Location</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='les-monuments' >Monuments</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='les-guides' >Guides</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='contact' >Contact</NavLink>
                        </li>
                        {user ?
                            <li className='nav-item me-3 align-middle mt-lg-3' >
                                <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='compte' >Mon compte</NavLink>
                            </li>
                            :
                            <li className='nav-item mt-2 mt-lg-3'>
                                <NavLink className="btn btn-danger  rounded-2 fontSize17  px-4 btn_anim" to='/connexion'>Se connecter</NavLink>
                            </li>
                        }


                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar