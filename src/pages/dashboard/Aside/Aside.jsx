import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import './Aside.css'

const Aside = () => {
    const [userName, setUserName] = useState('');
    const [userPicture, setUserPicture] = useState('');
    const [userRole, setUserRole] = useState('admin');
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            setUserName(user.name);
            setUserPicture(user.picture);
            setUserRole('admin');
        }
    }, [user])
    const logout = () => {
        axios.post(API_URL + 'api/revoke-tokens/', { id: user.id }, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(response => {
                localStorage.removeItem("user");
                setUserName("");
                setUserPicture("");
                setUser(null);
                navigate('/connexion')
            }).catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className="dashboard pt-4 mt-5">
            <div className="d-flex ">
                <aside className="">
                    <div className="pt-1 shadow-sm bgColor myAside pb-5">
                        <div className="text-center mt-5 mb-4">
                            <img src='/assets/logoo.jpg' className="img-fluid avater rounded-circle mb-2" alt="" width='75px ' />
                            {/* <img src={API_URL + userPicture} className="img-fluid avater rounded-circle mb-3" alt="" width='80px ' /> */}
                            <h5 className='fw-semibold text-light mb-3 text-opacity-75'>User Admin</h5>
                            {/* <h4 className='fw-semibold'>{userName}</h4> */}
                        </div>
                        {userRole === 'admin' ?
                            <div className='pb-3 '>
                                <div className='dash_menu' >
                                    <Link to="/dashboard" className='text-light text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa fa-tachometer-alt text-danger"></i>Dashboard</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/profile" className='text-light text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa fa-user-tie text-danger"></i>Profile</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/utilisateurs" className='text-light text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 bi bi-people-fill text-danger"></i>Utilisateurs</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/hotels" className='text-light text-decoration-none  ms-4 dash_item'><i class="fa-solid fa-hotel mx-2 fontSize22 pe-3 text-danger"></i>Hôtels</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/voitures" className='text-light text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-car-rear mx-2 fontSize22 pe-3 text-danger"></i>Agences</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/monuments" className='text-light text-decoration-none  ms-4 dash_item '><i class="fa-solid fa-landmark mx-2 fontSize22 pe-3 text-danger"></i>Monuments</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/guides" className='text-light text-decoration-none  ms-4 dash_item '><i class="fa-regular fa-compass mx-2 fontSize22 pe-3 text-danger"></i>Guides</Link>
                                </div>
                                
                                <div className='dash_menu' >
                                    <Link onClick={logout} className='text-light text-decoration-none  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-right-from-bracket text-danger"></i>Déconnexion</Link>
                                </div>
                            </div>
                            :
                            <div className='pb-3 '>
                                <div className='dash_menu' >
                                    <Link to="/dashboard" className='d-block  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa fa-user-tie text-warning"></i>Profile</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link to="/dashboard/mes-annonces" className='d-block  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 bi bi-house-check-fill text-warning"></i>Mes annonces</Link>
                                </div>
                                <div className='dash_menu' >
                                    <Link onClick={logout} className='d-block  ms-4 dash_item '><i className="mx-2 fontSize22 pe-3 fa-solid fa-right-from-bracket text-warning"></i>Déconnexion</Link>
                                </div>
                            </div>
                        }
                    </div>
                </aside>
                <Outlet />
            </div>
        </section>

    )
}

export default Aside