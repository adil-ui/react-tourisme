import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (

        <nav className="navbar fixed-top navbar-expand-lg  bgColor" >
            <div className="container " >
                <NavLink to="/" className="navbar-brand fw-bolder  " ><img src="/assets/logo1.png" alt="logo" width="150px" /></NavLink>
                <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" >

                        <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                            <NavLink className=" fontSize18 nav-link navLink text-light  " to='accueil' >Accueil</NavLink>
                        </li>
                        <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                            <NavLink className=" fontSize18 nav-link navLink text-light  " to='annonces' >Hôtels</NavLink>
                        </li>
                        <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                            <NavLink className=" fontSize18 nav-link navLink text-light  " to='annonces' >Voitures</NavLink>
                        </li>
                        <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                            <NavLink className=" fontSize18 nav-link navLink text-light  " to='annonces' >Monuments</NavLink>
                        </li>
                        <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                            <NavLink className=" fontSize18 nav-link navLink text-light  " to='contact' >Contact</NavLink>
                        </li>
                        {user ?
                            <li className='nav-item me-3 mt-0 mb-1 mt-lg-3' >
                                <NavLink className=" fontSize18 nav-link navLink text-light  " to='connexion' >Mon compte</NavLink>
                            </li>
                            :
                            <li className='nav-item mt-2 mt-lg-3'>
                                <NavLink className="btn btn-danger  rounded-2 fontSize18 shadow-sm px-4 btn_anim" to='/publier-annonce'>Se connecter</NavLink>
                            </li>
                        }


                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar