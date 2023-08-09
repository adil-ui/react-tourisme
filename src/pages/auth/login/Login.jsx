import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../../../context/auth-context'
import { NavLink, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/constants';

import axios from 'axios';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const clickLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        try {
            let res = await axios.post(API_URL+"api/login", formData)
            console.log(res);
            setUser(res.data.user);
            localStorage.setItem('user', res.data.user);
            navigate('/dashboard')
        } catch (err) {
            console.log(err.response);
            setMessage(err.response.data.message);
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
            <div className='row g-0 my-5 pt-4' >
                <form onSubmit={clickLogin} className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  py-3 px-4 rounded-4 shadow mx-auto">
                    <div className='text-center mb-4'><img src="/assets/logo.png" alt="logo" width="140px" /></div>

                    <div className="mb-3 ">
                        <label className="form-label m-0">Email</label>
                        <input type="email"  className="form-control" name='email' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="">
                        <label className="form-label m-0">Password</label>
                        <input type="password" className="form-control" name='password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {message && <p className='alert alert-danger  text-center alert-dismissible fade show mt-2' role="alert">{message}
                        <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </p>}
                    <div className='text-center mt-4'>
                        <NavLink to={'/mot-de-passe-oublier'} className="text-primary  text-center text-decoration-none">Forgot password ?</NavLink>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary py-2 col-12 fw-semibold px-4" >Se Connecter</button>
                    </div>
                    <p className='text-center mt-3'>Don't have an account ? <NavLink to={'/inscription'} className="text-primary fw-semibold text-decoration-none">Sign up</NavLink></p>
               
                </form>
            </div>

    )
}

export default Login