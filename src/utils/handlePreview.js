import axios from "./axios.js";
import movieTrailer from 'movie-trailer'


export const getLink = async (item, setLink) => {
    const response = await axios.get(`https://api.themoviedb.org/3/${item.original_title ? "movie" : "tv"}/${item.id}`)
    const imdbId = response.data.imdb_id;
    if (imdbId) {
        setLink(`https://www.imdb.com/title/${imdbId}`);
    } else {
        setLink("")
    }
}

export const fetchData = async (item, setMovie) => {
    try {
        const response = await axios.get(`/${item.original_title ? "movie" : "tv"}/${item.id}`);
        setMovie(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getTrailer = async (item, setTrailer) => {
    let trailer;
    if (item.original_title) {
        trailer = await movieTrailer(item.original_title, {videoType: 'movie'});
    } else {
        trailer = await movieTrailer(item.original_name, {videoType: "tv"});
    }
    setTrailer(trailer);
}