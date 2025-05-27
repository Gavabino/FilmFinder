import axios from "axios";

const handleSearch = async (search, year) => {
    const isYear = year !== ""
    const endpoint = isYear ? "movie" : "multi"
    let url = `/search/${endpoint}&language=en-US&query=${encodeURIComponent(search)}`;

    if (isYear) {
        url += `&year=${year}`
    }

    try {
        const response = await axios.get(url);
        return response.results;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default handleSearch;