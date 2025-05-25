import {useEffect, useState} from "react";
import axios from "../utils/axios.js";

const Preview = ( {item}) => {
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
        <div style={{backgroundImage: `url(${bgImageUrl})`}} className="bg-cover bg-center w-full h-[50vh] m-2 flex flex-row justify-start">
            <div className="m-4 w-1/4 flex flex-col">
                <p>{item.original_title ? item.original_title : item.original_name}</p>
                <p>{item.overview}</p>
            </div>
        </div>
    )
}

export default Preview