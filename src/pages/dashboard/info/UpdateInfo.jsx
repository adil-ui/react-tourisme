import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config/constants';
import { useParams } from 'react-router-dom';

const UpdateInfo = () => {

    const [information, setInformation] = useState(null)
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();

    useEffect(() => {
        fetch(API_URL + 'api/details-information/' + params.id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setInformation(result.information[0]);
                setTitle(result.information[0].title);
                setPicture(result.information[0].picture);
                setDescription(result.information[0].description);
                setCategory(result.information[0].category);


            })
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("picture", picture);
        formData.append("description", description);

        try {
            const response = await axios.post(API_URL + 'api/update-information/' + params.id, formData);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        axios.get(API_URL + "api/all-category")
            .then(result => {
                setCategories(result.data.categories);
                console.log(result.data);
            })
    }, [])
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <div>
            <form className="row mx-auto px-4 pb-5 mb-5 mt-5" onSubmit={submit} encType="multipart/form-data">
                <div className="col-md-6 mt-2">
                    <label for="category" className="form-label m-0 fw-semibold">Categorie</label>
                    <select id='category' className='form-select py-2' onChange={handleCategoryChange} >
                        <option value={category?.id} selected>{category?.name}</option>
                        <option value="" disabled >Sélectionnez une catégorie</option>
                        {categories?.map(elt => (
                            elt.name !== category.name &&
                            <option value={elt.id}>{elt.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6 ">
                    <label className="form-label fw-semibold">Titre</label>
                    <input type="text" className="form-control py-2" name='name' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="col-md-12  mt-4">
                    <label for="formFile" className="form-label fw-semibold">Photo</label>
                    <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                    <img src={API_URL + picture} className="img-fluid avater" alt="" width='150px ' />
                </div>
                <div className="col-md-12 mt-4">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea name="" id="" rows="6" className="form-control " value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                {message && <p className='alert alert-success text-center alert-dismissible fade show mt-1' role="alert">{message}
                    <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </p>}

                <div className='d-flex justify-content-end mt-3'>
                    <button type="submit" class="btn btn-primary px-4">Enregistrer les modifications</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateInfo