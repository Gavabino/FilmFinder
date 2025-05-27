import axios from "../utils/axios.js";

const handleSearch = async (search, year) => {
    if (!search) {
        console.log("No search")
        return [];
    }

    try {
        const response = await axios.get("https://api.themoviedb.org/3/search/multi", {
            params: {
                query: search,
                language: "en-US",
            },
        });

        console.log("Full API response:", response.data)

        let results = response.data.results || [];

        if (year) {
            results = results.filter((item) => {
                const date = item.release_date || item.first_air_date || "";
                return date.startsWith(year);
            });
        }

        return results
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default handleSearch;