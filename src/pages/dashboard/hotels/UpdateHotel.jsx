import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config/constants';
import { useParams } from 'react-router-dom';

const UpdateHotel = () => {

  const [hotel, setHotel] = useState(null)
  const [cities, setCities] = useState([])
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [star, setStar] = useState();
  const [price, setPrice] = useState();
  const [link, setLink] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const params = useParams();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStarChange = (event) => {
    setStar(event.target.value);
  };
  useEffect(() => {
    fetch('http://api.geonames.org/searchJSON?country=MA&maxRows=1000&username=ethisko')
      .then(response => response.json())
      .then(result => {
        setCities(Array.from(result.geonames).map(obj => obj.toponymName))
      })
  }, [])

  useEffect(() => {
    fetch(API_URL + 'api/details-hotel/' + params.id)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setHotel(result.hotel[0]);
        setName(result.hotel[0].name);
        setAddress(result.hotel[0].address);
        setPhone(result.hotel[0].phone);
        setPicture(result.hotel[0].picture);
        setEmail(result.hotel[0].email);
        setCity(result.hotel[0].city.name);
        setStar(result.hotel[0].star);
        setPrice(result.hotel[0].price);
        setLink(result.hotel[0].link);
        setLongitude(result.hotel[0].longitude);
        setLatitude(result.hotel[0].latitude);
        setDescription(result.hotel[0].description);


      })
  }, []);

  const updateHotel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("picture", picture);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("link", link);
    formData.append("star", star);
    formData.append("price", price);
    formData.append("city", city);

    try {
      const response = await axios.post(API_URL + 'api/update-hotel/' + params.id, formData);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div>
      <form className="row mx-auto px-4 pb-5 mb-5" onSubmit={updateHotel} encType="multipart/form-data">
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
        <div className="col-md-6  mt-4">
          <label for="formFile" className="form-label fw-semibold">Photo</label>
          <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
          <img src={API_URL + picture} className="img-fluid avater" alt="" width='75px ' />
        </div>
        <div className="col-md-6 mb-3 mt-4">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control py-2" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Description</label>
          <textarea name="" id="" rows="5" className="form-control " value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Longitude</label>
          <input type="text" className="form-control py-2" name='name' value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Latitude</label>
          <input type="text" className="form-control py-2" name='name' value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">lien web</label>
          <input type="text" className="form-control py-2" name='name' value={link} onChange={(e) => setLink(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label for="city" className="form-label fw-semibold">Ville</label>
          <select id='city' className='form-select' onChange={handleCityChange} >
            <option value={city}>{city}</option>
            <option value="">Sélectionnez une ville</option>
            {cities?.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Prix Minimum</label>
          <input type="number" className="form-control py-2" min='1' name='name' value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label for="star" className="form-label fw-semibold">Etoile</label>
          <select id='star' className='form-select' onChange={handleStarChange} required>
            <option value={star}>{star}</option>
            <option value="">Sélectionnez un nombre</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>



        {/* <div className=" fw-semibold text-center ">{message ? <p className='alert alert-success'>{message}</p> : null}</div> */}
        {message && <p className='alert alert-success text-center alert-dismissible fade show' role="alert">{message}
          <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </p>}

        <div className='d-flex justify-content-end mt-3'>
          <button type="submit" class="btn btn-primary px-4">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateHotel