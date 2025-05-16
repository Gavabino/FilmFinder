import {useEffect, useState} from "react";
import axios from '../utils/axios.js'

const Movie = ({ id, type }) => {
    const [movie, setMovie] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/${type}/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchData();
    }, []);

    const bgImageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    return (
        <div className={`h- w-44 border-2 border-gray-300 min-w-72 bg-cover bg-center`}
             style={{ backgroundImage: `url(${bgImageUrl})` }}>
            {/*<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="object-contain w-full h-full"/>*/}
        </div>
    )
}

export default Movie