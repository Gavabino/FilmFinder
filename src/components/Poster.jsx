import {useEffect, useState} from "react";
import axios from '../utils/axios.js'

const Poster = ({ id, type, handleClick }) => {
    const [movie, setMovie] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/${type}/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id, type]);

    const bgImageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    return (
        <img src={bgImageUrl}
             className="object-contain max-h-48 hover:scale-110 transition duration-300 w-fit"
             draggable={"false"}
             alt="Movie"
             onClick={handleClick}
        />
    )
}
export default Poster