import axios from "axios";
import { useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"

import { Link } from "react-router-dom";

const Employee = () => {
    const [employes, setEmployes] = useState([])
    const [cin, setCin] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('0620356950');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [dataLenght, setDataLenght] = useState(0);

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("cin", cin);
        formData.append("name", name);
        formData.append("address", address);
        formData.append("picture", picture);
        formData.append("phone", phone);
        formData.append("email", email);
        try {
            const response = await axios.post(API_URL + 'api/add-employe', formData);
            setMessage(response.data.message);
            setEmployes(response.data.employes);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetch(API_URL + "api/employe-per-page/1")
            .then(response => response.json())
            .then(result => {
                setEmployes(result.employes);
                setDataLenght(result.employesLenght);
            })
    }, [])

    const searchData = (e) => {
        e.preventDefault();

        axios.post(API_URL + "api/search-employe/1", { search, searchValue })
            .then(response => {
                console.log(response.data)
                setEmployes(response.data.employes)
                setDataLenght(response.data.employesLenght)
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
                <h4 className="fw-semibold">Liste des employés</h4>
                <button type="button" className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Ajouter</button>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ajout Employé</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  py-0">
                            <form className="row mx-auto mt-3" onSubmit={submit} encType="multipart/form-data">
                                <div className="col-md-6 mt-2">
                                    <label className="form-label m-0 fw-semibold">CIN</label>
                                    <input type="text" className="form-control py-2" name='name' value={cin} onChange={(e) => setCin(e.target.value)} required />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label className="form-label m-0 fw-semibold">Nom complet</label>
                                    <input type="text" className="form-control py-2" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label className="form-label m-0 fw-semibold">Téléphone</label>
                                    <input type="tel" className="form-control py-2" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="col-md-6 mb-3 mt-2">
                                    <label className="form-label m-0 fw-semibold">Email</label>
                                    <input type="email" className="form-control py-2" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label className="form-label m-0 fw-semibold">Addresse</label>
                                    <input type="text" className="form-control py-2" name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label for="formFile" className="form-label m-0 fw-semibold">Photo</label>
                                    <input className="form-control py-2" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                                </div>

                                {/* <div className=" fw-semibold text-center ">{message ? <p className='alert alert-success'>{message}</p> : null}</div> */}
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
                        <option value="cin">CIN</option>
                        <option value="name">Nom complet</option>
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
                            <th scope="col" className='primaryColor'>CIN</th>
                            <th scope="col" className='primaryColor'>Nom Complet</th>
                            <th scope="col" className='primaryColor'>Adresse</th>
                            <th scope="col" className='primaryColor'>Téléphone</th>
                            <th scope="col" className='primaryColor'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {employes?.length > 0 ?
                            employes.map(elt => (
                                <tr>
                                    <th scope="row" className="align-middle">{elt.id}</th>
                                    <td><img src={API_URL + elt.picture} className="rounded-circle" alt="elt_picture" width='38px ' /></td>
                                    <td className="align-middle">{elt.cin}</td>
                                    <td className="align-middle">{elt.name}</td>
                                    <td className="align-middle">{elt.address}</td>
                                    <td className="align-middle">{elt.phone}</td>
                                    <td className="align-middle">
                                        <Link to={`/dashboard/edit-employe/${elt.id}`} className="btn btn-primary me-1"><i className="bi bi-pencil-square"></i></Link>
                                        <button onClick={() => ''} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
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
                        setElements={setEmployes}
                        elementName="employes"
                        url={"api/employe-per-page/"}
                        allElementsUrl={"api/all-employe"}
                    />
                }
            </div>
        </section>
    )
}

export default Employee