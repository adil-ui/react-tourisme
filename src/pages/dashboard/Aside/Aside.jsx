import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import './Aside.css'

const Aside = () => {
    const [userName, setUserName] = useState('');
    const [userPicture, setUserPicture] = useState('');
    const [userRole, setUserRole] = useState('');
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            setUserName(user.name);
            setUserPicture(user.picture);
            setUserRole(user.role);
        }
    }, [user])
    const logout = () => {

        localStorage.removeItem("user");
        setUserName("");
        setUserPicture("");
        setUser(null);
        navigate('http://localhost:3000/login')

    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className="dashboard pt-4 mt-5">
            <div className="d-flex ">
                <aside className="">
                    <div className="pt-1 shadow-sm bg-white shadow myAside pb-4">
                        <div className="text-center mt-3 mb-3">
                            <img src={API_URL + userPicture} className="img-fluid avater rounded-circle mb-1" alt="" width='70px ' />
                            <h6 className='primaryColor fw-semibold fontSize18'>{userName}</h6>
                        </div>
                        <div className='pb-3 '>
                                <div className='dash_menu' >
                                    <Link to="/dashboard" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa fa-tachometer-alt text-danger"></i>Dashboard</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/profile" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-id-card text-danger"></i>Profile</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/employees" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa fa-user-tie text-danger"></i> Employés</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/inscriptions" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-rectangle-list  text-danger"></i>Inscriptions</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/users" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 bi bi-people-fill text-danger"></i>Utilisateurs</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/hotels" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item'><i class="fa-solid fa-hotel mx-2 fontSize22 pe-3 text-danger"></i>Hôtels</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/agencies" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-car-rear mx-2 fontSize22 pe-3 text-danger"></i>Agences</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/guides" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="fa-regular fa-compass mx-2 fontSize22 pe-3 text-danger"></i>Guides</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/categories" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="bi bi-tags-fill mx-2 fontSize22 pe-3 text-danger"></i>Catégories</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/info" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-circle-info mx-2 fontSize22 pe-3 text-danger"></i>Informations</Link>
                                </div>
                                {/* <div className='dash_menu' >
                                    <Link to="/dashboard/bookmarks" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-heart mx-2 fontSize22 pe-3 text-danger"></i>Favoris</Link>
                                </div> */}
                                <div className='dash_menu' >
                                    <Link onClick={logout} className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-right-from-bracket text-danger"></i>Déconnexion</Link>
                                </div>
                            </div>
                        {/* {userRole === 'Admin'?
                            
                        //     :
                        //     <div className='py-3 '>
                        //         <div className='dash_menu py-3' >
                        //             <Link to="/dashboard/profile" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-id-card text-danger"></i>Profile</Link>
                        //         </div>
                        //         <div className='dash_menu py-3' >
                        //             <Link to="/dashboard/info" className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-heart mx-2 fontSize22 pe-3 text-danger"></i>Favoris</Link>
                        //         </div>
                        //         <div className='dash_menu py-3' >
                        //             <Link onClick={logout} className='primaryColor fw-semibold text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-right-from-bracket text-danger"></i>Déconnexion</Link>
                        //         </div>
                        //     </div>
                        // } */}
                    </div>
                </aside>
                <Outlet />
            </div>
        </section>

    )
}

export default Aside