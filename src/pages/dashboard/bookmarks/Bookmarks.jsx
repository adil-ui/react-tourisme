import { useContext, useEffect, useState } from "react"

import CardBookmark from "../../../components/card-bookmark/CardBookmark"
import Pagination from "../../../components/Pagination/Pagination"
import { API_URL } from "../../../config/constants";
import AuthContext from "../../../context/auth-context";

const Bookmarks = () => {
 const {user} = useContext(AuthContext)
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    useEffect(() => {
        fetch(API_URL + "api/bookmark-per-page/1" + user?.id)
            .then(response => response.json())
            .then(result => {
                setBookmarks(result.bookmarks);
            })
    }, [])

    return (
            <div className='mx-auto row w-100 mt-4'>
                <div class="row col-12 gx-4">
                    {bookmarks?.map(elt => <CardBookmark elt={elt} key={elt.id} />)}
                </div>

                {/* <Pagination
                    setElements={setBookmarks}
                    elementName="bookmarks"
                    url={"api/bookmark-per-page/"+ user?.id}
                    allElementsUrl={"api/get-bookmark/"+user?.id}
                /> */}
            </div>

    )
}

export default Bookmarks