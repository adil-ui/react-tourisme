import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config/constants"

import $ from 'jquery'

import './Hotels.css'
import axios from "axios"
import Card from "../../components/card-hotel/Card"
import Pagination from "../../components/Pagination/Pagination"
import PaginationFilter from "../../components/PaginationFilter/PaginationFilter"

const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [city, setCity] = useState('');
    const [star, setStar] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState();
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        fetch(API_URL + 'api/get-cities')
            .then(response => response.json())
            .then(result => {
                setCities(result.cities);
            })
    }, [])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    useEffect(() => {
        fetch(API_URL + "api/home-hotel-per-page/1")
            .then(response => response.json())
            .then(result => {
                setHotels(result.hotels);
            })
    }, [])
    const filter = async (e) => {
        e.preventDefault();
        setFiltered(true);
        const formData = new FormData();
        formData.append('city', city);
        formData.append('star', star);
        formData.append('priceMin', priceMin);
        formData.append('priceMax', priceMax);
        setFormData(formData);
        try {
            const response = await axios.post(API_URL + 'api/filter-hotels', formData)
            setHotels(response.data.hotels)
            window.scroll(0, 0);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <section className="search py-5 mt-5">

            <div className="row pb-5 pt-4 px-5 mx-auto g-0">
                <aside className='col-xl-3 col-12 ps-0 pe-xl-5 mx-auto  aside'>
                    <form onSubmit={filter} className="shadow-sm  bg-white rounded-3 pb-4 mx-auto">
                        <div className="bgColor w-100 rounded-top-3 px-3 pt-2 pb-1 mb-3 d-flex justify-content-between align-items-center">
                            <h4 className="mt-1 fw-semibold text-light">Filter </h4>
                            <h4><i class="bi bi-funnel text-light align-middle"></i></h4>
                        </div>
                        <div className="form_search row px-2 w-100 mx-auto">

                            <div className="col-xl-12 col-lg-4 col-md-12 col-sm-12 col-12">
                                <select className="form-select py-2" id="ville" onChange={(e) => setCity(e.target.value)}>
                                    <option selected disabled>City</option>
                                    {cities.map(city => (
                                        <option value={city.id}>{city.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-xl-6 col-lg-4 col-sm-6 col-12">
                                <input type="number" onChange={(e) => setPriceMin(e.target.value)} className="form-control my_input" name='price' placeholder="Price min" id="price" />
                            </div>
                            <div className="col-xl-6 col-lg-4  col-sm-6 col-12">
                                <input type="number" onChange={(e) => setPriceMax(e.target.value)} className="form-control my_input" name='price' placeholder="Price max" id="price" />
                            </div>

                            <div className='col-xl-12 col-md-6'>
                                <h5 className="mb-3 fw-semibold">Search by star</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value='5' name="flexRadioDefault" onChange={(e) => setStar(e.target.value)} id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value='4' name="flexRadioDefault" onChange={(e) => setStar(e.target.value)} id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        <i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value='3' name="flexRadioDefault" onChange={(e) => setStar(e.target.value)} id="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault3">
                                        <i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value='2' name="flexRadioDefault" onChange={(e) => setStar(e.target.value)} id="flexRadioDefault4" />
                                    <label class="form-check-label" for="flexRadioDefault4">
                                        <i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value='1' name="flexRadioDefault" onChange={(e) => setStar(e.target.value)} id="flexRadioDefault5" />
                                    <label class="form-check-label" for="flexRadioDefault5">
                                        <i class="bi bi-star-fill text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i><i class="bi bi-star text-warning me-1"></i>
                                    </label>
                                </div>

                            </div>

                            <div className='col-xl-12 col-md-6'>
                                <h5 className="my-3 fw-semibold">Search by category</h5>

                                <div class="form-check">
                                    <Link to='/agencies' className="text-black">
                                        <input class="form-check-input" type="radio" name="category" id="category2" />
                                        <label class="form-check-label" for="category2">
                                            Car Rental Agencies
                                        </label>
                                    </Link>
                                </div>

                                <div class="form-check my-2">
                                    <Link to='/guides' className="text-black">

                                        <input class="form-check-input" type="radio" name="category" id="category4" />
                                        <label class="form-check-label" for="category4">
                                            Tourist Guides
                                        </label>
                                    </Link>
                                </div>

                                <div class="form-check ">
                                    <Link to='/practical-info' className="text-black">

                                        <input class="form-check-input" type="radio" name="category" id="category3" />
                                        <label class="form-check-label" for="category3">
                                            Practical Infos
                                        </label>
                                    </Link>

                                </div>


                            </div>
                        </div>

                        <div className="mt-4 px-3">
                            <button className="btn btn-danger col-12 fw-semibold" style={{ height: '50px' }}>Search</button>

                        </div>
                    </form>
                </aside>

                <div className='col-9 mx-auto mt-xl-0 mt-lg-5 mt-5'>
                    <div class="row gx-3">

                        {hotels.length > 0 ?
                            hotels?.map(elt => <Card elt={elt} key={elt.id} />)
                            :
                            <div className="shadow-sm bg-white rounded-3">
                                <p className="text-center py-5 mt-4 fs-5 fw-semibold">No Results Found</p>
                            </div>
                        }
                    </div>
                    {filtered && hotels.length > 8 && <PaginationFilter
                        setElements={setHotels}
                        elementName="hotels"
                        url={"api/filter-hotels-per-page/"}
                        allElementsUrl={"api/filter-hotels"}
                        formData={formData} />}
                    {!filtered &&
                        <Pagination
                            setElements={setHotels}
                            elementName="hotels"
                            url={"api/home-hotel-per-page/"}
                            allElementsUrl={"api/all-hotel"}
                        />}
                    {/* <Pagination
                        setElements={setHotels}
                        elementName="hotels"
                        url={"api/home-hotel-per-page/"}
                        allElementsUrl={"api/all-hotel"}
                    /> */}
                </div>
            </div>
        </section>

    )
}

export default Hotels