import { useContext, useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const [categories, setCategories] = useState(null)
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();
  
  
    useEffect(() => {
      fetch(API_URL + 'api/details-category/' + params.id)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setCategories(result.category[0]);
          setName(result.category[0].name);
          setPicture(result.category[0].picture);
        })
    }, []);
  
    const submit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("picture", picture);
  
      try {
        const response = await axios.post(API_URL + 'api/update-category/' + params.id, formData);
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
        <h4 className="fw-semibold mb-4">Modifier categorie</h4>
        <div className="col-md-12 mt-4">
          <label className="form-label fw-semibold">Titre</label>
          <input type="text" className="form-control py-2" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
       
        <div className=" mt-4">
          <label for="formFile" className="form-label fw-semibold">Photo</label>
          <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
          <img src={API_URL + picture} className="img-fluid  mb-2" alt="" width='200px ' />

        </div>  
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
export default UpdateCategory