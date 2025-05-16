import {useEffect, useState} from "react";
import axios from "../utils/axios.js";
import Movie from "./Movie.jsx";

const Row = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/trending/all/week");
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchData()
    }, []);
    console.table(movies)
    return (
        <div className='overflow-x-auto'>
        <div className="flex flex-nowrap h-80 gap-2">
            {movies.map((movie) => <Movie key={movie.id} id={movie.id} type={movie.media_type}/>)}
            {movies.map((movie) => <Movie key={movie.id} id={movie.id} type={movie.media_type}/>)}
        </div>
        </div>
    )
}

export default Row