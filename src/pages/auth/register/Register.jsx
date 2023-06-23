import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/constants';
import './Register.css'

const Register = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("picture", picture);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);
        console.log(role);
        try {
            const res = await axios.post(API_URL + "api/register", formData);
            console.log(res.data);
            navigate('/connexion');
        } catch (err) {
            setMessage('Email existe dèja');
            console.log(err.response);
        }
    };

    return (
        <section class="register">
            <div className='container mt-5 pt-3'>
                <form className='col-xl-4 col-lg-6 col-md-7 col-sm-9 col-10 mt-5 py-3 px-4 rounded-4 shadow-lg mx-auto' onSubmit={handleSubmit} encType="multipart/form-data">
                    <h4 className='text-center fw-bolder mt-2 text-danger'>Inscrivez-vous</h4>
                    <div className='bg-secondary my-3 bg-opacity-25 mx-auto rounded-5' style={{ height: '0.1px', width: '100%', }}></div>

                    <div class="mb-1 ">
                        <label class="form-label m-0 fw-semibold">Nom et Prénom <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name='name' onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div class="mb-1 ">
                        <label class="form-label m-0 fw-semibold">Téléphone <span class="text-danger">*</span></label>
                        <input type="tel" class="form-control" name='phone' onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div class="mb-2">
                        <label for="formFile" class="form-label m-0 fw-semibold">Photo</label>
                        <input class="form-control" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                    </div>
                    <div class="mb-1 ">
                        <label class="form-label m-0 fw-semibold">Addresse <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name='address' onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div class="mb-1">
                        <label class="form-label m-0 fw-semibold">Email <span class="text-danger">*</span></label>
                        <input type="email" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div class="mb-1">
                        <label class="form-label m-0 fw-semibold">Mot de passe <span class="text-danger">*</span></label>
                        <input type="password" class="form-control" name='password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {message && <div className="message text-warning"><p>{message}</p></div>}
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary py-2 col-12 fw-semibold px-4" >Envoyer</button>
                    </div>
                    <p className='text-center mt-2'>Vous avez dèja un compte ? <NavLink to={'/connexion'} className="text-primary fw-semibold text-decoration-none">Se connecter</NavLink></p>

                </form>
            </div>
        </section>
    )
}

export default Register