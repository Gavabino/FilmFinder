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
                <p className="text-white text-4xl p-2 bg-gray-600 bg-opacity-25 rounded-t-md">{item.original_title ? item.original_title : item.original_name}</p>
                <p className="text-white text-xl p-2 bg-gray-600 bg-opacity-25 rounded-b-md">{item.overview}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
            </div>
        </div>
    )
}

export default Preview