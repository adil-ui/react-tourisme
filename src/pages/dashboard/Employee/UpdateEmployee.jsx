import { useContext, useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    const [employes, setEmployes] = useState(null)
    const [cin, setCin] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();
  
  
    useEffect(() => {
      fetch(API_URL + 'api/details-employe/' + params.id)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setEmployes(result.employe[0]);
          setCin(result.employe[0].cin);
          setName(result.employe[0].name);
          setAddress(result.employe[0].address);
          setPhone(result.employe[0].phone);
          setPicture(result.employe[0].picture);
          setEmail(result.employe[0].email);
        })
    }, []);
  
    const submit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("cin", cin);
      formData.append("address", address);
      formData.append("picture", picture);
      formData.append("phone", phone);
      formData.append("email", email);
  
      try {
        const response = await axios.post(API_URL + 'api/update-employe/' + params.id, formData);
        setMessage(response.data.message);
      } catch (error) {
        console.log(error);
      }
  
    }

    useEffect(() => {
      window.scroll(0, 0);
  }, [])
  return (
    <div className="mx-auto  pt-4 pb-5 mt-2" >
      <form className="row px-5 mx-auto bg-transparent pb-5" onSubmit={submit} encType="multipart/form-data">
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Nom complet</label>
          <input type="text" className="form-control py-2" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Téléphone</label>
          <input type="tel" className="form-control py-2" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Addresse</label>
          <input type="text" className="form-control py-2" name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className=" mt-4">
          <label for="formFile" className="form-label fw-semibold">Photo</label>
          <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
          <img src={API_URL + picture} className="img-fluid avater rounded-circle mb-2" alt="" width='75px ' />

        </div>
       
        <div className="col-md-12 mb-3 mt-4">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control py-2" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        {/* <div className=" fw-semibold text-center ">{message ? <p className='alert alert-success'>{message}</p> : null}</div> */}
        {message && <p className='alert alert-success text-center alert-dismissible fade show' role="alert">{message}
          <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </p>}

        <div className="col-12 d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary px-4 fw-semibold py-2">Enregistrer modification</button>
        </div>
      </form>
    </div>

  )
}
export default UpdateEmployee