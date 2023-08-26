import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (

        <nav className="navbar fixed-top navbar-expand-xl  bg-white py-1 shadow-sm" >
            <div className="container-fluid " >
                <NavLink to="/" className="navbar-brand fw-bolder ms-5" ><img src="/assets/logo.png" alt="logo" width="140px" /></NavLink>
                <button className="navbar-toggler bg-light me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2  ms-auto pe-5" >

                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='/' >Home</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor" to='hotels' >Hotels</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='agencies' >Car rental agencies</NavLink>
                        </li>
                       
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='guides' >Tourist guide</NavLink>
                        </li>
                        <li className='nav-item me-3 align-middle mt-lg-3' >
                            <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='info' >Practical info</NavLink>
                        </li>
                        
                        {user ?
                            <li className='nav-item me-3 align-middle mt-lg-3' >
                                <NavLink className=" fontSize17 nav-link navLink primaryColor  " to='dashboard' >My account</NavLink>
                            </li>
                            :
                            <li className='nav-item mt-2 mt-lg-3'>
                                <NavLink className="fontSize17 nav-link navLink primaryColor" to='/login'>Sign in</NavLink>
                            </li>
                        }


                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar