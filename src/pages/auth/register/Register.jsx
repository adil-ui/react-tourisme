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
    const [type, setType] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("type", type);
        formData.append("picture", picture);
        formData.append("email", email);
        formData.append("password", password);
        try {
            const res = await axios.post(API_URL + "api/register", formData);
            console.log(res.data);
            setMessage('Ajouter avec succes');
        } catch (err) {
            setMessage(err.data);
            console.log(err.response);
        }
    };

    return (
        <div className='row g-0'>
            <form className='col-xl-4 col-lg-6 col-md-7 col-sm-9 col-10  py-2 px-4 rounded-4 shadow mx-auto row gy-0 gx-4' onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='text-center mb-4'><img src="/assets/logo.png" alt="logo" width="130px" /></div>
                <div className="col-md-6 mb-1">
                    <label for="type " className="form-label m-0">Type <span className="text-danger">*</span></label>
                    <select id="type" name='type' className="form-select" onChange={(e) => setType(e.target.value)} required>
                        <option selected disabled>Select an option</option>
                        <option value='tourist'>Tourist</option>
                        <option value='hotel'>Hotel</option>
                        <option value='agence'>Car rental agency</option>
                        <option value='guide'>Tourist Guide</option>
                    </select>
                </div>
                <div class="mb-1 col-md-6">
                    <label class="form-label m-0 ">Full name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name='name' onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="mb-1 ">
                    <label class="form-label m-0 ">Phone <span class="text-danger">*</span></label>
                    <input type="tel" class="form-control" name='phone' onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-1">
                    <label for="formFile" className="form-label m-0">Picture <span className="text-danger">*</span></label>
                    <input className="form-control" type="file" id="formFile" name='picture' onChange={(e) => setPicture(e.target.files[0])} />
                </div>
                <div class="mb-1 ">
                    <label class="form-label m-0 ">Address <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name='address' onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div class="mb-1">
                    <label class="form-label m-0 ">Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div class="mb-1">
                    <label class="form-label m-0 ">Password<span class="text-danger">*</span></label>
                    <input type="password" class="form-control" name='password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {message && <div className="message text-warning"><p>{message}</p></div>}
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary py-2 col-12 fw-semibold px-4" >Send</button>
                </div>
                <p className='text-center mt-2'>Already have an account? <NavLink to={'/connexion'} className="text-primary fw-semibold text-decoration-none">Sign in</NavLink></p>

            </form>
        </div>

    )
}

export default Register