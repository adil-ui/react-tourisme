import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"

import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth-context";

const Category = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [dataLenght, setDataLenght] = useState(0);
    const { user } = useContext(AuthContext);
    const [userRole, setUserRole] = useState('');
    useEffect(() => {
        if (user) {
            setUserRole(user?.role)
        }
    }, [])
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("picture", picture);
        try {
            const response = await axios.post(API_URL + 'api/add-category', formData);
            setMessage(response.data.message);
            setCategories(response.data.categories);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetch(API_URL + "api/category-per-page/1")
            .then(response => response.json())
            .then(result => {
                setCategories(result.categories);
                setDataLenght(result.categoriesLenght);
            })
    }, [])
    const deleteCategory = (id) => {
        axios.delete(API_URL + 'api/delete-category/' + id)
            .then(() => {
                setCategories(categories.filter(f => f.id !== id))
            });
    }
    const searchData = (e) => {
        e.preventDefault();

        axios.post(API_URL + "api/search/1", { search, searchValue })
            .then(response => {
                console.log(response.data)
                setCategories(response.data.categories)
                setDataLenght(response.data.categoriesLenght)
            })

            .catch(error =>
                console.log(error)
            )
    }

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className="mx-auto  py-4 mt-2 w-100 px-5" >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-semibold">Liste des catégories</h4>
                <button type="button" className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Ajouter</button>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ajout Catégorie</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  pt-4 pb-1">
                            <form className="row mx-auto" onSubmit={submit} encType="multipart/form-data">
                                <div className="col-md-12">
                                    <label className="form-label m-0 fw-semibold">Titre</label>
                                    <input type="text" className="form-control py-2" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mt-4 mb-5">
                                    <label for="formFile" className="form-label m-0 fw-semibold">Image</label>
                                    <input className="form-control py-2" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
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
                        <option value="name">Titre</option>
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
                        {categories?.length > 0 ?
                            categories.map(elt => (
                                <tr>
                                    <th scope="row" className="align-middle">{elt.id}</th>
                                    <td><img src={API_URL + elt.picture} alt="elt_picture" width='90px ' /></td>
                                    <td className="align-middle">{elt.name}</td>
                                    <td className="align-middle">
                                        <Link to={`/dashboard/edit-category/${elt.id}`} className="btn btn-primary me-1"><i className="bi bi-pencil-square"></i></Link>
                                        {userRole !== 'Admin' ?
                                        <button onClick={() => deleteCategory(elt.id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                            
                                            : null}
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
                        setElements={setCategories}
                        elementName="categories"
                        url={"api/category-per-page/"}
                        allElementsUrl={"api/all-category"}
                    />
                }
            </div>
        </section>
    )
}

export default Category