import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config/constants"

import axios from "axios"
import Pagination from "../../components/Pagination/Pagination"
import CardGuide from "../../components/card-guide/CardGuide"

const Guides = () => {

    const [guides, setGuides] = useState([]);
    const [result, setResult] = useState(0);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");
    const [formData, setFormData] = useState();
    const [filtered, setFiltered] = useState(false);
    const [loader, setLoader] = useState(false);

    // useEffect(() => {
    //     fetch(API_URL + 'api/list-cities')
    //         .then(response => response.json())
    //         .then(result => {
    //             setCities(result.cities);
    //         })
    // }, [])

    // const filter = async (e) => {
    //     e.preventDefault();
    //     setFiltered(true);
    //     const formData = new FormData();
    //     formData.append('city', city);
    // 
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
        axios.get(API_URL + "api/home-guide-per-page/1")
            .then(result => {
                setGuides(result.data.data);
                setLoader(false)
            })
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
                            <h4 className="mt-1 fw-semibold text-light">Filter </h4>
                            <h4><i class="bi bi-funnel text-light align-middle"></i></h4>
                        </div>
                        <div className="form_search row px-2 w-100 mx-auto">

                            <div className="col-xl-12 col-lg-4 col-md-12 col-sm-12 col-12">
                                <select className="form-select py-2" id="ville" onChange={(e) => setCity(e.target.value)}>
                                    <option selected disabled>Select a city</option>
                                    {cities.map(city => (
                                        <option value={city.id}>{city.name}</option>
                                    ))}
                                </select>
                            </div>


                            <div className='col-xl-12 col-md-6'>
                                <h5 className="my-3 fw-semibold">Search by category</h5>
                                <div class="form-check mb-2">
                                    <Link to='/guides' className="text-black">

                                        <input class="form-check-input" type="radio" name="category" id="category4" checked />
                                        <label class="form-check-label" for="category4">
                                            Tourist Guides
                                        </label>
                                    </Link>
                                </div>
                                <div class="form-check">
                                    <Link to='/hotels' className="text-black">
                                        <input class="form-check-input" type="radio" name="category" id="category2" />
                                        <label class="form-check-label" for="category2">
                                            Hotels
                                        </label>
                                    </Link>
                                </div>
                                <div class="form-check my-2">
                                    <Link to='/agencies' className="text-black">
                                        <input class="form-check-input" type="radio" name="category" id="category2" />
                                        <label class="form-check-label" for="category2">
                                            Car Rental Agencies
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
                    <div class="row">
                        {loader ?
                            <div className="d-flex justify-content-center align-items-center py-5 my-5">
                                <div className="loader shadow-sm"></div>
                            </div>
                            :
                            guides.map(elt => <CardGuide elt={elt} key={elt.id} />)}
                    </div>

                    {guides.length > 7 &&
                        <Pagination
                            setElements={setGuides}
                            elementName="data"
                            url={"api/home-guide-per-page/"}
                            allElementsUrl={"api/all-guide"}
                        />
                    }

                </div>
            </div>
        </section>

    )
}

export default Guides