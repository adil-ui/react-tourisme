import { useContext, useEffect, useState } from "react"

import CardBookmark from "../../../components/card-bookmark/CardBookmark"
import Pagination from "../../../components/Pagination/Pagination"
import { API_URL } from "../../../config/constants";
import AuthContext from "../../../context/auth-context";

const Bookmarks = () => {
    const { user } = useContext(AuthContext)
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    useEffect(() => {
        fetch(API_URL + "api/bookmark-per-page/1" + user?.id)
            .then(response => response.json())
            .then(result => {
                setBookmarks(result.bookmarks);
                console.log(user);
                result.bookmarks.forEach(element => {
                    console.log(element.picture);
                });
            })
    }, [])

    return (
        <div className='mx-auto row w-100 mt-4'>
            <div class="row col-12 gx-4">
                {bookmarks.length > 0 ?
                    bookmarks.map(elt => <CardBookmark elt={elt} key={elt.id} />)
                    :
                    <div className="shadow-sm bg-white rounded-3 col-11 mx-auto" style={{ height: '200px' }}>
                        <p className="text-center pt-5 mt-4 fs-5 fw-semibold">No Results Found</p>
                    </div>
                }
            </div>
            {bookmarks.length > 7 &&
                <Pagination
                    setElements={setBookmarks}
                    elementName="bookmarks"
                    url={"api/bookmark-per-page/" + user?.id}
                    allElementsUrl={"api/get-bookmark/" + user?.id}
                />
            }
        </div>

    )
}

export default Bookmarks