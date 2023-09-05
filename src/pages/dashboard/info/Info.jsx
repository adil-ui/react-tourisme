import axios from "axios";
import { useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"

import { Link } from "react-router-dom";

const Info = () => {
    const [informations, setInformations] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [dataLenght, setDataLenght] = useState(0);


    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("category", category);
        formData.append("title", title);
        formData.append("picture", picture);
        formData.append("description", description);
        try {
            const response = await axios.post(API_URL + 'api/add-information', formData);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetch(API_URL + "api/information-per-page/1")
            .then(response => response.json())
            .then(result => {
                setInformations(result.informations);
                setDataLenght(result.informationsLenght);
            })
    }, [])
    useEffect(() => {
        axios.get(API_URL + "api/all-category")
            .then(result => {
                setCategories(result.data.categories);
                console.log(result.data);
            })
    }, [])
    const deleteInformation = (id) => {
        axios.delete(API_URL + 'api/delete-information/' + id)
            .then(() => {
                setInformations(informations.filter(f => f.id !== id))
            });
    }
    const searchData = (e) => {
        e.preventDefault();

        axios.post(API_URL + "api/search-information/1", { search, searchValue })
            .then(response => {
                console.log(response.data)
                setInformations(response.data.informations)
                setDataLenght(response.data.informationsLenght)
            })

            .catch(error =>
                console.log(error)
            )
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <section className="mx-auto  py-4 mt-2 w-100 px-5" >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-semibold">Liste des informations pratique</h4>
                <button type="button" className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Ajouter</button>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ajout information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  py-0">
                            <form className="row mx-auto mt-3" onSubmit={submit} encType="multipart/form-data">
                                <div className="col-md-12 mt-2">
                                    <label for="category" className="form-label m-0 fw-semibold">Categorie</label>
                                    <select id='category' className='form-select py-2' onChange={handleCategoryChange} >
                                        <option value="" disabled selected>Sélectionnez une catégorie</option>
                                        {categories?.map(elt => (
                                            <option value={elt.id}>{elt.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label className="form-label m-0 fw-semibold">Titre</label>
                                    <input type="text" className="form-control py-2" name='name' value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label for="formFile" className="form-label m-0 fw-semibold">Photo</label>
                                    <input className="form-control py-2" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                                </div>

                                <div className="col-md-12 mt-2">
                                    <label className="form-label m-0 fw-semibold">Description</label>
                                    <textarea name="" id="" rows="5" className="form-control " value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                                </div>

                                {message && <p className='alert alert-success text-center alert-dismissible fade show' role="alert">{message}
                                    <button type="button" onClick={() => setMessage("")} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </p>}
                                <div className="modal-footer mt-3">
                                    <button type="submit" className="btn btn-primary px-4">Enregistrer</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <form onSubmit={searchData}>
                <div className="input-group mx-auto">
                    <select className="form-select py-2" onChange={(e) => {
                        setSearch(e.target.value)
                        setSearchValue("")
                    }}>
                        <option value="all" selected>Tout</option>
                        <option value="id">Id</option>
                        <option value="title">Titre</option>
                    </select>
                    <input type="text" className="form-control w-50 py-2" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Recherche..." />
                    <button className="btn btn-outline-secondary px-4 py-2" type="submit" >Chercher</button>
                </div>

            </form>
            <div className="table-responsive col-12 bg-white shadow-sm  mx-auto  mytable   mt-2">

                <table className="table  table-hover  rounded-3  m-0">
                    <thead>
                        <tr>
                            <th scope="col" className='primaryColor'>#</th>
                            <th scope="col" className='primaryColor'>Photo</th>
                            <th scope="col" className='primaryColor'>Titre</th>
                            <th scope="col" className='primaryColor'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {informations?.length > 0 ?
                            informations.map(elt => (
                                <tr>
                                    <th scope="row" className="align-middle">{elt.id}</th>
                                    <td className="align-middle"><img src={API_URL + elt.picture} className="rounded-circle align-middle" alt="hotel_picture" width='45px ' /></td>
                                    <td className="align-middle">{elt.title}</td>
                                    <td className="align-middle">
                                        <Link to={`/dashboard/edit-information/${elt.id}`} className="btn btn-primary me-1"><i className="bi bi-pencil-square"></i></Link>
                                        <button onClick={() => deleteInformation(elt.id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                    </td>

                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan='7' className="text-center py-5">Aucune résultat n'a été trouvé</td>
                            </tr>
                        }
                    </tbody>
                </table>
                {dataLenght > 7 &&
                    <Pagination
                        setElements={setInformations}
                        elementName="informations"
                        url={"api/information-per-page/"}
                        allElementsUrl={"api/all-information"}
                    />
                }
            </div>
        </section>
    )
}

export default Info