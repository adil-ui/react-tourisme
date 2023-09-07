import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config/constants"

import './Cars.css'
import axios from "axios"
import CardAgency from "../../components/card-agency/CardAgency"
import Pagination from "../../components/Pagination/Pagination"

const Cars = () => {

    const [agencies, setAgencies] = useState([]);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [priceMin, setPriceMin] = useState("");
    const [formData, setFormData] = useState();
    const [filtered, setFiltered] = useState(false);
    const [loader, setLoader] = useState(false);



    useEffect(() => {
        fetch(API_URL + 'api/get-cities')
            .then(response => response.json())
            .then(result => {
                setCities(result.cities);
            })
    }, [])

    // const filter = async (e) => {
    //     e.preventDefault();
    //     setFiltered(true);
    //     const formData = new FormData();
    //     formData.append('city', city);
    //     formData.append('sector', sector);
    //     formData.append('category', category);
    //     formData.append('type', type);
    //     formData.append('livingRoom', livingRoom);
    //     formData.append('bedroom', bedroom);
    //     formData.append('bathroom', bathroom);
    //     formData.append('floor', floor);
    //     formData.append('areaMin', areaMin);
    //     formData.append('areaMax', areaMax);
    //     formData.append('priceMin', priceMin);
    //     formData.append('priceMax', priceMax);
    //     setFormData(formData);
    //     try {
    //         const response = await axios.post(API_URL + 'api/filter-properties', formData)
    //         setData(response.data.properties)
    //         window.scroll(0, 0);
    //         console.log(response.data);

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    useEffect(() => {
        setLoader(true)
        fetch(API_URL + "api/home-agency-per-page/1")
            .then(response => response.json())
            .then(result => {
                setAgencies(result.agencies);
                setLoader(false)

            })
        return
    }, [])
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <section className="search py-5 mt-5">

            <div className="row pb-5 pt-4 px-5 mx-auto g-0">
                <aside className='col-xl-3 col-12 ps-0 pe-xl-5 mx-auto  aside'>
                    <form onSubmit='{filter}' className="shadow-sm  bg-white rounded-3 pb-4 mx-auto">
                        <div className="bgColor w-100 rounded-top-3 px-3 pt-2 pb-1 mb-3 d-flex justify-content-between align-items-center">
                            <h4 className="mt-1 fw-semibold text-light">Filtre </h4>
                            <h4><i class="bi bi-funnel text-light align-middle"></i></h4>
                        </div>
                        <div className="form_search row px-2 w-100 mx-auto">

                            <div className="col-xl-12 col-lg-4 col-md-12 col-sm-12 col-12">
                                <select className="form-select py-2" id="ville" onChange={(e) => setCity(e.target.value)}>
                                    <option selected disabled>Ville</option>
                                    {cities.map(city => (
                                        <option value={city.id}>{city.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-xl-6 col-lg-4 col-sm-6 col-12">
                                <input type="number" onChange={(e) => setPriceMin(e.target.value)} className="form-control my_input" name='price' placeholder="Prix min" id="price" />
                            </div>
                            <div className="col-xl-6 col-lg-4  col-sm-6 col-12">
                                <input type="number" onChange={(e) => setPriceMax(e.target.value)} className="form-control my_input" name='price' placeholder="Prix max" id="price" />
                            </div>


                            <div className='col-xl-12 col-md-6'>
                                <h5 className="my-3 fw-semibold">Recherche par catégorie</h5>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="categorie" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Hôtels
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="categorie" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Agences de location
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="categorie" id="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault3">
                                        Monuments
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="categorie" id="flexRadioDefault4" />
                                    <label class="form-check-label" for="flexRadioDefault4">
                                        Guides
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="mt-4 px-3">
                            <button className="btn btn-danger col-12 fw-semibold" style={{ height: '50px' }}>Chercher</button>

                        </div>
                    </form>
                </aside>

                <div className='col-9 mx-auto mt-xl-0 mt-lg-5 mt-5'>
                    <div class="row">
                        {loader ?
                            <div className="d-flex justify-content-center align-items-center py-5 my-5">
                                <div className="loader shadow-sm"></div>
                            </div>
                            :
                            agencies.length > 0 ?
                                agencies?.map(elt => <CardAgency elt={elt} key={elt.id} />)
                                :
                                <div className="shadow-sm bg-white rounded-3">
                                    <p className="text-center py-5 mt-4 fs-5 fw-semibold">No Results Found</p>
                                </div>
                        }
                    </div>
                    <Pagination
                        setElements={setAgencies}
                        elementName="agencies"
                        url={"api/home-agency-per-page/"}
                        allElementsUrl={"api/all-agency"}
                    />

                </div>
            </div>
        </section>

    )
}

export default Cars