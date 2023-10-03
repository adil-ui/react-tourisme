import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config/constants"

import axios from "axios"
import Pagination from "../../components/Pagination/Pagination"
import CardInfo from "../../components/card-info/CardInfo"
import PaginationFilter from "../../components/PaginationFilter/PaginationFilter"

const Infos = () => {

    const [informations, setInformations] = useState([]);
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null);
    const [formData, setFormData] = useState();
    const [filtered, setFiltered] = useState(false);
    const [loader, setLoader] = useState(false);

    const filter = async (e) => {
        e.preventDefault();
        setFiltered(true);
        const formData = new FormData();
        formData.append('type', 'Info');
        formData.append('category', category);
        setFormData(formData);
        try {
            const response = await axios.post(API_URL + 'api/filter-hotels', formData)
            setInformations(response.data?.hotels)
            window.scroll(0, 0);
            setLoader(false)

        } catch (error) {
            console.log(error);
        }
        return

    }
    useEffect(() => {
        setLoader(true)
        axios.get(API_URL + "api/home-information-per-page/1")
            .then(result => {
                setInformations(result.data.data);
                setLoader(false)

            })
    }, [])
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
        <section className="search py-5 mt-5">

            <div className="row pb-5 pt-4 px-5 mx-auto g-0">
                <aside className='col-xl-3 col-12 ps-0 pe-xl-5 mx-auto '>
                    <form onSubmit={filter} className="shadow-sm  bg-white rounded-3 pb-4 mx-auto">
                        <div className="bgColor w-100 rounded-top-3 px-3 pt-2 pb-1 mb-3 d-flex justify-content-between align-items-center">
                            <h4 className="mt-1 fw-semibold text-light">Filter </h4>
                            <h4><i class="bi bi-funnel text-light align-middle"></i></h4>
                        </div>
                        <div className="form_search row px-2 w-100 mx-auto">

                            <div className="col-md-12 mt-2">
                                <select id='category' className='form-select py-2' onChange={handleCategoryChange} >
                                    <option value="" disabled selected>Select a type</option>
                                    {categories?.map(elt => (
                                        <option value={elt.id}>{elt.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='col-xl-12 col-md-6'>
                                <h5 className="my-3 fw-semibold">Search by category</h5>
                                <div class="form-check mb-2">
                                    <Link to='/practical-info' className="text-black">
                                        <input class="form-check-input" type="radio" name="category" id="category3" checked />
                                        <label class="form-check-label" for="category3">
                                            Practical Infos
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
                                <div class="form-check">
                                    <Link to='/guides' className="text-black">
                                        <input class="form-check-input" type="radio" name="category" id="category4" />
                                        <label class="form-check-label" for="category4">
                                            Tourist Guides
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

                <div className='col-xl-9 col-11 mx-auto '>
                    <div class="row">
                        {loader ?
                            <div className="d-flex justify-content-center align-items-center py-5 my-5">
                                <div className="loader shadow-sm"></div>
                            </div>
                            :
                            informations?.length > 0 ?
                                informations.map(elt => <CardInfo elt={elt} key={elt.id} />)
                                :
                                <div className="shadow-sm bg-white rounded-3">
                                    <p className="text-center py-5 mt-4 fs-5 fw-semibold">No Results Found</p>
                                </div>

                        }
                    </div>
                    {filtered && informations.length > 8 && <PaginationFilter
                        setElements={setInformations}
                        elementName="data"
                        url={"api/filter-information-per-page/"}
                        allElementsUrl={"api/filter-hotels"}
                        formData={formData} />}
                    {!filtered &&
                        <Pagination
                            setElements={setInformations}
                            elementName="data"
                            url={"api/home-information-per-page/"}
                            allElementsUrl={"api/all-information"}
                        />}


                </div>
            </div>
        </section>

    )
}

export default Infos