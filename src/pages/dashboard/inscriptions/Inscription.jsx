import axios from "axios";
import { useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"
const Inscription = () => {
    const [register, setRegister] = useState([])
    const [dataLenght, setDataLenght] = useState(0);
    const [search, setSearch] = useState('all');
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        fetch(API_URL + "api/register-per-page/1")
            .then(response => response.json())
            .then(result => {
                setRegister(result.register);
                setDataLenght(result.registerLenght);
            })
    }, [])
    const addUser = async (id) => {
        await axios.post(API_URL + 'api/add-user/' + id)
        .then(() => {
            setRegister(register.filter(f => f.id !== id))
        });

    }
    const deleteUser = async (id) => {
        await axios.post(API_URL + 'api/delete-register/' + id)
        .then(() => {
            setRegister(register.filter(f => f.id !== id))
        });

    }
    const searchData = (e) => {
        e.preventDefault();
        axios.post(API_URL + "api/search-register/1", { search, searchValue })
            .then(response => {
                console.log(response.data)
                setRegister(response.data.register)
                setDataLenght(response.data.registerLenght)
            })
            .catch(error =>
                console.log(error)
            )
    }

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className="mx-auto pt-4 pb-5 mt-2 w-75 mx-auto" >
            <h4 className="fw-semibold mb-4">Liste des utilisateurs</h4>
            <form onSubmit={searchData}>
                <div className="input-group mx-auto">
                    <select className="form-select py-2" onChange={(e) => {
                        setSearch(e.target.value)
                        setSearchValue("")
                    }}>
                        <option value="all" selected>Tout</option>
                        <option value="id">Id</option>
                        <option value="name">Nom</option>
                        <option value="email">Email</option>

                    </select>
                    <input type="text" className="form-control w-50 py-2" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Recherche..." />
                    <button className="btn btn-outline-secondary px-4 py-2" type="submit" >Chercher</button>
                </div>

            </form>
            <div class="table-responsive bg-white col-12  mx-auto  mytable rounded-3  mt-3">
                <table class="table  table-hover  rounded-3  m-0">
                    <thead>
                        <tr>
                            <th scope="col" className='primaryColor'>#</th>
                            <th scope="col" className='primaryColor'>Photo</th>
                            <th scope="col" className='primaryColor'>Nom</th>
                            <th scope="col" className='primaryColor'>Email</th>
                            <th scope="col" className='primaryColor'>Téléphone</th>
                            <th scope="col" className='primaryColor'>Adresse</th>
                            <th scope="col" className='primaryColor'>role</th>
                            <th scope="col" className='primaryColor'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {register?.length > 0 ?
                            register?.map(elt => (
                                <tr key={elt.id}>
                                    <th scope="row" className="align-middle">{elt.id}</th>
                                    <td className="align-middle"><img src={API_URL + elt.picture} className="rounded-circle" alt="register_picture" width='45px ' /></td>
                                    <td className="align-middle">{elt.name}</td>
                                    <td className="align-middle">{elt.email}</td>
                                    <td className="align-middle">{elt.phone}</td>
                                    <td className="align-middle">{elt.address}</td>

                                    <td className="align-middle">{elt.role}</td>
                                    <td className="align-middle">
                                        <button onClick={() => addUser(elt.id)} className="btn btn-primary me-1"><i class="bi bi-check-lg fontSize17"></i></button>
                                        <button onClick={() => deleteUser(elt.id)} className="btn btn-danger"><i class="bi bi-x-lg fontSize17"></i></button>

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
                        setElements={setRegister}
                        elementName="register"
                        url={"api/register-per-page/"}
                        allElementsUrl={"api/all-register"}
                    />
                }
            </div>
        </section >
    )
}

export default Inscription