import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config/constants';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_URL + "api/get-picture")
            .then(response => response.json())
            .then(result => {
                setData(result.pictures);
            })
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                axios.post(API_URL + 'api/reset-password/' + params.token, { password })
                    .then(response => {
                        setMessage(response.data.success)

                    }).catch(error => {
                        setMessage(error.response.data.error);
                    })
            } catch (error) {
                console.log(error);
            }
        } else {
            setMessage('Enter a valid password');
            setConfirmPassword("");
        }

    }
    return (

        <div className=" row g-0 my-5 py-4">
            <form onSubmit={onSubmit} className="login col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  py-4 px-4 rounded-4 shadow mx-auto " method='POST'>
                {data.map(elt =>
                    elt.name === 'logo' ?
                        <div className='text-center mb-4'><img src={API_URL + elt.picture} alt="logo" width="140px" /></div>

                        : null
                )}

                <div className="mb-4 ">
                    <label className="form-label fw-semibold">Mot de passe <span class="text-danger">*</span></label>
                    <input type="password" className="form-control" name='password' onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className="mb-2 ">
                    <label className="form-label fw-semibold">Confirmer mot de passe <span class="text-danger">*</span></label>
                    <input type="password" className="form-control" name='confirmPassword' onChange={e => setConfirmPassword(e.target.value)} required />
                </div>
                {message && <p className='alert alert-warning py-3 col-11 mx-auto text-center alert-dismissible fade show' role="alert">{message}
                    <button type="button" onClick={() => setMessage("")} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </p>}
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary col-12 fw-semibold px-4">Send</button>
                </div>
            </form>
        </div>

    )
}

export default ResetPassword