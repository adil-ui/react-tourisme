import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Pagination from "../../../components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"
import AuthContext from "../../../context/auth-context";
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
const Hotel = () => {
    const [users, setUsers] = useState([])
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('0620356950');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('1234');
    const [city, setCity] = useState('');
    const [star, setStar] = useState();
    const [price, setPrice] = useState();
    const [link, setLink] = useState('');
    const [longitude, setLongitude] = useState('-6.882972');
    const [latitude, setLatitude] = useState('33.976389');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
   
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleStarChange = (event) => {
        setStar(event.target.value);
    };
    const addHotel = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        formData.append("picture", picture);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("description", description);
        formData.append("longitude", longitude);
        formData.append("latitude", latitude);
        formData.append("link", link);
        formData.append("star", star);
        formData.append("price", price);
        formData.append("city", city);
        try {
          const response = await axios.post(API_URL + 'api/add-hotel' , formData);
          setMessage(response.data.message);
        } catch (error) {
          console.log(error);
        }
    
      }
    // useEffect(() => {
    //     fetch(API_URL + "api/list-users/1", {
    //         headers: {
    //             'Authorization': `Bearer ${user.token}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             setUsers(result.users);
    //         })
    // }, [])
    const deleteUser = (id) => {
        axios.delete(API_URL + 'api/delete-user/' + id)
            .then(() => {
                setUsers(users.filter(f => f.id !== id))
            });
    }

    return (
        <section className="mx-auto  py-4 mt-3 w-100 px-5" >
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h4 className="fw-semibold">Liste des hôtels</h4>
                <button type="button" class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Ajouter</button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Ajout hôtel</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className="row mx-auto" onSubmit={addHotel} encType="multipart/form-data">
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
                                <div className=" mt-4">
                                    <label for="formFile" className="form-label fw-semibold">Photo</label>
                                    <input className="form-control py-2 mb-1" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
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
                                <div className="col-md-6 mt-4">
                                    <label className="form-label fw-semibold">Prix Minimum</label>
                                    <input type="number" className="form-control py-2" min='1' name='name' value={price} onChange={(e) => setPrice(e.target.value)} required />
                                </div>
                                <div className="col-md-6 mt-4">
                                    <label for="star" className="form-label fw-semibold">Etoile</label>
                                    <select id='star' className='form-select' onChange={handleStarChange} required>
                                        {star !== '' &&
                                            <option value={star} selected>{star}</option>
                                        }
                                        <option value="" selected>Sélectionnez un nombre</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3 mt-4">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control py-2" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-6 mb-3 mt-4">
                                    <label className="form-label fw-semibold">Mot de passe</label>
                                    <input type="password" className="form-control py-2" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {/* <div className=" fw-semibold text-center ">{message ? <p className='alert alert-success'>{message}</p> : null}</div> */}
                                {message && <p className='alert alert-success text-center alert-dismissible fade show' role="alert">{message}
                                    <button type="button" onClick={() => setMessage("")} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </p>}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary px-4">Enregistrer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div class="table-responsive col-12  mx-auto  mytable rounded-3  mt-3">
                <table class="table bg-white table-hover  rounded-3  m-0">
                    <thead>
                        <tr>
                            <th scope="col" className='primaryColor'>#</th>
                            <th scope="col" className='primaryColor'>Photo</th>
                            <th scope="col" className='primaryColor'>Nom et Prénom</th>
                            <th scope="col" className='primaryColor'>Email</th>
                            <th scope="col" className='primaryColor'>Addresse</th>
                            <th scope="col" className='primaryColor'>Téléphone</th>
                            <th scope="col" className='primaryColor'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {users.map(user => (
                            <tr>
                                <th scope="row" className="pt-3">{user.id}</th>
                                <td><img src={API_URL + user.picture} className="img-fluid rounded-circle" alt="categorie_picture" width='48px ' /></td>
                                <td className="pt-3">{user.name}</td>
                                <td className="pt-3">{user.email}</td>
                                <td className="pt-3">{user.address}</td>
                                <td className="pt-3">{user.phone}</td>
                                <td className="align-middle">
                                    <button onClick={() => deleteUser(user.id)} className="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
                <Pagination
                    setElements={setUsers}
                    elementName="users"
                    url={"api/list-users/"}
                    allElementsUrl={"api/list-users"}
                />
            </div>
        </section>
    )
}

export default Hotel