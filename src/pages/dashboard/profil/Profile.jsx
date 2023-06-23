import { useContext, useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import axios from 'axios';
import Textarea from '../../../components/textarea/Textarea';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPicture, setUserPicture] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setUserId(user.id);
      setUserName(user.name);
      setUserAddress(user.address);
      setUserPhone(user.phone);
      setUserPicture(user.picture);
      setUserEmail(user.email);
      setUserPassword(user.password);
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
    setToken(user.token)

    try {
      const response = await axios.post(API_URL + 'api/edit-user/' + userId, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log(user.token);
      response.data.token = user.token;
      setMessage(response.data.success);
      setUser({ ...response.data.user, token: user.token });
      localStorage.setItem("user", JSON.stringify({ ...response.data.user, token: response.data.token }));
    } catch (error) {
      setMessage(error.message);
    }

  }
  return (
    <div className="mx-auto  py-4 mt-5" >
      <form className="row w-75 mx-auto bg-transparent" onSubmit={updateUser} encType="multipart/form-data">
        <h4 className="fw-semibold mb-4">Mes informations</h4>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Nom et Prénom</label>
          <input type="text" className="form-control py-2" name='name' value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="col-md-6 mt-4">
          <label className="form-label fw-semibold">Téléphone</label>
          <input type="tel" className="form-control py-2" name='phone' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
        </div>
        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Addresse</label>
          <Textarea />
        </div>
        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Addresse</label>
          <input type="text" className="form-control py-2" name='address' value={userAddress} onChange={(e) => setUserAddress(e.target.value)} required />
        </div>
        <div className=" mt-4">
          <label for="formFile" className="form-label fw-semibold">Photo</label>
          <input className="form-control py-2" type="file" id="formFile" name="picture" onChange={(e) => setUserPicture(e.target.files[0])} />
        </div>
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
          <button type="button" onClick={()=> setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </p> }

        <div className="col-12 d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary px-4 fw-semibold py-2">Enregistrer modification</button>
        </div>
      </form>
    </div>

  )
}
export default Profile