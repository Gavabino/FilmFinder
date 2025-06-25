import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {getLink, fetchData} from "../utils/handlePreview.js";

const Preview = ( {item, handleClose}) => {
    const [movie, setMovie] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        fetchData(item, setMovie);
        getLink(item, setLink);
    }, [item]);

    const bgImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    return (
        <div style={{backgroundImage: `url(${bgImageUrl})`}} className="bg-cover bg-center w-full h-[50vh] m-2 flex flex-row justify-start relative">
            <div className='absolute top-0 right-0 m-4' onClick={handleClose}>
                <FontAwesomeIcon icon={faX} className='text-white text-xl' />
            </div>
            <div className="m-4 min-w-[25%] max-w-[35%] flex flex-col">
                <p className="text-white text-4xl p-2 bg-gray-600 bg-opacity-50 rounded-t-md">{item.original_title ? item.original_title : item.original_name}</p>
                <p className="text-white text-xl p-2 bg-gray-600 bg-opacity-50">{item.overview}</p>
                <div className="bg-gray-600 rounded-b-md bg-opacity-50 w-full flex">
                    {link && <a href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-xl bg-gray-600 p-1 pl-2 pr-2 m-2 rounded-xl hover:bg-gray-700"
                    >IMDb Listing</a>}
                </div>
            </div>
        </div>
    )
}

export default Preview