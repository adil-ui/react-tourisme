import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"
import AuthContext from "../../../context/auth-context";
const User = () => {
    const [users, setUsers] = useState([])
    const [dataLenght, setDataLenght] = useState(0);
    const [search, setSearch] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [userRole, setUserRole] = useState('');
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            setUserRole(user?.role)
        }
    }, [])


    useEffect(() => {
        fetch(API_URL + "api/user-per-page/1")
            .then(response => response.json())
            .then(result => {
                setUsers(result.users);
                setDataLenght(result.usersLenght);
            })
    }, [])
    const blockUser = async (id) => {
        await axios.post(API_URL + 'api/block-user/' + id)

    }
    const unBlockUser = async (id) => {
        await axios.post(API_URL + 'api/deblock-user/' + id)

    }
    const searchData = (e) => {
        e.preventDefault();
        axios.post(API_URL + "api/search-user/1", { search, searchValue })
            .then(response => {
                console.log(response.data)
                setUsers(response.data.users)
                setDataLenght(response.data.usersLenght)
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
                        <option value="email">Email</option>
                        <option value="status">Status</option>
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
                            <th scope="col" className='primaryColor'>Nom</th>
                            <th scope="col" className='primaryColor'>Email</th>
                            <th scope="col" className='primaryColor'>status</th>
                            <th scope="col" className='primaryColor'>role</th>
                            <th scope="col" className='primaryColor'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {users?.length > 0 ?
                            users?.map(user => (
                                <tr>
                                    <th scope="row" className="pt-3">{user.id}</th>
                                    <td className="pt-3">{user.email}</td>
                                    <td className="pt-3">{user.status}</td>
                                    <td className="pt-3">{user.role}</td>
                                    {userRole !== 'Admin' ?
                                           user.status === 'Débloquer' ?
                                           <td className="align-middle">
                                               <button onClick={() => blockUser(user.id)} className="btn btn-danger"><i class="fa-solid fa-lock"></i> Bloquer</button>
                                           </td>
                                           :
                                           <td className="align-middle">
                                               <button onClick={() => unBlockUser(user.id)} className="btn btn-success"><i class="fa-solid fa-lock-open"></i> Débloquer</button>
                                           </td>
                                       

                                            : null}
                                   

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
                        setElements={setUsers}
                        elementName="users"
                        url={"api/user-per-page/"}
                        allElementsUrl={"api/all-user"}
                    />
                }
            </div>
        </section >
    )
}

export default User