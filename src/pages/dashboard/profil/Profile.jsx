import { useContext, useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import axios from 'axios';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPicture, setUserPicture] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [city, setCity] = useState('');
  const [star, setStar] = useState();
  const [price, setPrice] = useState();
  const [link, setLink] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const cities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fès",
    "Tanger",
    "Agadir",
    "Meknès",
    "Oujda",
    "Kenitra",
    "Tétouan",
    "Salé",
    "Nador",
    "Beni Mellal",
    "Mohammedia",
    "Témara",
    "El Jadida",
    "Taza",
    "Khémisset",
    "Taourirt",
    "Ouarzazate",
    "Safi",
    "Béni Tadjit",
    "Larache",
    "Ksar el Kébir",
    "Guelmim",
    "Berrechid",
    "Tifelt",
    "Tiznit",
    "Inezgane",
    "Khenifra",
    "Skhirat",
    "Essaouira",
    "Sidi Slimane",
    "Tiznit",
    "Tan-Tan",
    "Oulad Teïma",
    "Berrechid",
    "Ben Guerir",
    "Sidi Bennour",
    "Azrou",
    "Youssoufia",
    "Lqliaa",
    "Dakhla",
    "Tiznit",
    "Sefrou",
    "Midelt",
    "Khouribga",
    "Kalaât Sraghna",
    "Beni Ansar",
    "Martil",
    "Ouazzane",
    "Berkane",
    "Sidi Yahya El Gharb",
    "Sidi Kacem",
    "Lahraouyine",
    "Ksar el Kébir",
    "Oued Zem",
    "Beni Mellal",
    "Fkih Ben Salah",
    "Azemmour",
    "Sidi Bennour",
    "Sidi Ifni",
    "Chefchaouen",
    "Imzouren",
    "Agdz",
    "Ahfir",
    "Aïn Harrouda",
    "Aït Melloul",
    "Aït Ourir",
    "Al Hoceïma",
    "Aousserd",
    "Assa",
    "Aïn Cheggag",
    "Azilal",
    "Bouznika",
    "Bouskoura",
    "Boujdour",
    "Casablanca",
    "Dakhla",
    "El Kelâa des Sraghna",
    "El Jadida",
    "Errachidia",
    "Essaouira",
    "Fès",
    "Figuig",
    "Fquih Ben Salah",
    "Guelmim",
    "Guercif",
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);

  };
  const handleStarChange = (event) => {
    setStar(event.target.value);

  };
  useEffect(() => {
    if (user) {
      setUserId(user.user_id);
      setUserName(user.name);
      setUserAddress(user.address);
      setUserPhone(user.phone);
      setUserPicture(user.picture);
      setUserEmail(user.email);
      setUserPassword(user.password);
      setDescription(user.description);
      setStar(user.star);
      setPrice(user.price);
      setLongitude(user.longitude);
      setLatitude(user.latitude);
      setLink(user.link);
      setCity(user.city);
      setUserRole(user.role);

    }
  }, [user])
  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("address", userAddress);
    formData.append("picture", userPicture);
    formData.append("phone", userPhone);
    formData.append("email", userEmail);
    formData.append("password", userPassword);
    formData.append("description", description);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("link", link);
    formData.append("star", star);
    formData.append("price", price);
    formData.append("city", city);

    try {
      const response = await axios.post(API_URL + 'api/update-user/' + userId, formData);
      setMessage(response.data.success);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="mx-auto  pt-4 pb-5 mt-2" >
      <form className="row px-5 mx-auto bg-transparent pb-5" onSubmit={updateUser} encType="multipart/form-data">
        <h4 className="fw-semibold mb-4">Mes informations</h4>
        <div className="col-md-6 ">
          <label className="form-label fw-semibold">Nom complet</label>
          <input type="text" className="form-control py-2" name='name' value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Téléphone</label>
          <input type="tel" className="form-control py-2" name='phone' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
        </div>
        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Addresse</label>
          <input type="text" className="form-control py-2" name='address' value={userAddress} onChange={(e) => setUserAddress(e.target.value)} required />
        </div>
        <div className=" mt-4">
          <label for="formFile" className="form-label fw-semibold">Photo</label>
          <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setUserPicture(e.target.files[0])} />
          <img src={API_URL + userPicture} className="img-fluid avater rounded-circle mb-2" alt="" width='75px ' />

        </div>
        {userRole === 'Hotel' || userRole === 'Agence' || userRole === 'Guide' ?
          <>
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
                {city &&
                  <option value={city}>{city}</option>
                }
                <option value="">Sélectionnez une ville</option>

                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

          </>
          : null
        }
        {userRole === 'Hotel' || userRole === 'Agence' ?

          <div className="col-md-6 mt-4">
            <label className="form-label fw-semibold">Prix Minimum</label>
            <input type="number" className="form-control py-2" min='1' name='name' value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          : null}
        {userRole === 'Hotel' &&
          <div className="col-md-6 mt-4">
            <label for="star" className="form-label fw-semibold">Etoile</label>
            <select id='star' className='form-select' onChange={handleStarChange} required>
              {star !== '' &&
                <option value={star} selected>{star}</option>
              }
              <option value="">Sélectionnez un nombre</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        }
        <div className="col-md-6 mb-3 mt-4">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control py-2" name='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div className="col-md-6 mb-3 mt-4">
          <label className="form-label fw-semibold">Mot de passe</label>
          <input type="password" className="form-control py-2" name='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
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
export default Profile