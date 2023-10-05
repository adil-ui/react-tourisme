import axios from 'axios';
import { useState } from 'react'
import { API_URL } from '../../../config/constants';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(API_URL + 'api/forgot-password', { email })
                .then(response => {
                    setMessage(response.data.success)

                }).catch(error => {
                    console.log(error);
                })

        } catch (error) {

            console.log(error);
        }

    }
    return (
        <div className='row g-0 my-5 py-4' >
            <form onSubmit={onSubmit} className="login col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  py-3 px-4 rounded-4 shadow mx-auto ">
                <div className='text-center mb-4'><img src="/assets/logo.png" alt="logo" width="140px" /></div>

                <div className="mb-2 ">
                    <label className="form-label fw-semibold">Email <span class="text-danger">*</span></label>
                    <input type="email" className="form-control" name='email' onChange={e => setEmail(e.target.value)} required />
                </div>
                {message && <p className='alert alert-success   text-center alert-dismissible fade show mt-2' role="alert">{message}
                    <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </p>}
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary col-12 fw-semibold px-4">Send</button>
                </div>
            </form>
        </div>

    )
}

export default ForgotPassword