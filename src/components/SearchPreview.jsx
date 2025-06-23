import {useEffect, useState} from "react";
import axios from "../utils/axios.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

const SearchPreview = ( {item, handleClose}) => {
    const [movie, setMovie] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/${item.original_title ? "movie" : "tv"}/${item.id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [item]);

    const bgImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    console.log(bgImageUrl)
    return (
        <div style={{backgroundImage: `url(${bgImageUrl})`}} className="bg-cover bg-center w-screen h-full flex flex-row justify-start relative">
            <div className='absolute top-0 right-0 m-4' onClick={handleClose}>
                <FontAwesomeIcon icon={faX} className='text-white text-xl' />
            </div>
            <div className="m-4 min-w-[25%] max-w-[35%] flex flex-col">
                <p className="text-white text-4xl p-2 bg-gray-600 bg-opacity-25 rounded-t-md">{item.original_title ? item.original_title : item.original_name}</p>
                <p className="text-white text-xl p-2 bg-gray-600 bg-opacity-25 rounded-b-md">{item.overview}</p>
            </div>
        </div>
    )
}

export default SearchPreview