import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../../../context/auth-context'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();

    const clickLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        try {
            let res = await axios.post("api/login", formData)
            console.log(res);
            setUser({ ...res.data.user, token: res.data.token });
            localStorage.setItem('user', JSON.stringify({ ...res.data.user, token: res.data.token }));
            navigate('/dashboard')
        } catch (err) {
            console.log(err.response.data);

            setMessage('Utilisateur introuvable');
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <section className='login'>
            <div className='container mt-5 pt-5'>
                <form onSubmit={clickLogin} className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10 mt-5 py-3 px-4 rounded-4 shadow-lg mx-auto">
                    <h4 className='text-center fw-bolder  mt-4 text-danger'>Connectez-vous</h4>
                    <div className='bg-secondary my-4 bg-opacity-50 mx-auto rounded-5' style={{ height: '0.1px', width: '100%', }}></div>

                    <div className="mb-2 ">
                        <label className="form-label fw-semibold">Email</label>
                        <input type="email" ref={emailRef} className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="">
                        <label className="form-label fw-semibold">Mot de passe</label>
                        <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {message && <p className='alert alert-danger py-3 text-center alert-dismissible fade show' role="alert">{message}
                        <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </p>}
                    <div className='text-center mt-3'>
                        <NavLink to={'/mot-de-passe-oublier'} className="text-primary fw-semibold text-center text-decoration-none">Mot de passe oublier ?</NavLink>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary py-2 col-12 fw-semibold px-4" >Se Connecter</button>
                    </div>
                    <p className='text-center mt-2'>Vous n'avez pas de compte ? <NavLink to={'/inscription'} className="text-primary fw-semibold text-decoration-none">S'inscire</NavLink></p>
               
                </form>
            </div>

        </section>
    )
}

export default Login