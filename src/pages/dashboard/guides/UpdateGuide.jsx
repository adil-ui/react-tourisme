import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config/constants';
import { useParams } from 'react-router-dom';

const UpdateGuide = () => {

    const [guide, setGuide] = useState(null)
    const [cities, setCities] = useState([])
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [link, setLink] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    useEffect(() => {
        fetch('http://api.geonames.org/searchJSON?country=MA&maxRows=1000&username=ethisko')
            .then(response => response.json())
            .then(result => {
                setCities(Array.from(result.geonames).map(obj => obj.toponymName))
            })
    }, [])

    useEffect(() => {
        fetch(API_URL + 'api/details-guide/' + params.id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setGuide(result.guide[0]);
                setName(result.guide[0].name);
                setAddress(result.guide[0].address);
                setPhone(result.guide[0].phone);
                setPicture(result.guide[0].picture);
                setEmail(result.guide[0].email);
                setCity(result.guide[0].city.name);
                setLink(result.guide[0].link);
                setLongitude(result.guide[0].longitude);
                setLatitude(result.guide[0].latitude);
                setDescription(result.guide[0].description);


            })
    }, []);

    const submit = async (e) => {
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
        formData.append("city", city);

        try {
            const response = await axios.post(API_URL + 'api/update-guide/' + params.id, formData);
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
            <form className="row mx-auto px-4 pb-5 mb-5" onSubmit={submit} encType="multipart/form-data">
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
                    <label for="city" className="form-label fw-semibold">Ville</label>
                    <select id='city' className='form-select' onChange={handleCityChange} >
                        <option value={city}>{city}</option>
                        <option value="">Sélectionnez une ville</option>
                        <option value="Maroc">Tout le maroc</option>
                        {cities?.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6 mt-4">
                    <label className="form-label fw-semibold">lien web</label>
                    <input type="text" className="form-control py-2" name='name' value={link} onChange={(e) => setLink(e.target.value)} required />
                </div>
                {message && <p className='alert alert-success text-center alert-dismissible fade show mt-1' role="alert">{message}
                    <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </p>}

                <div className='d-flex justify-content-end mt-3'>
                    <button type="submit" class="btn btn-primary px-4">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateGuide