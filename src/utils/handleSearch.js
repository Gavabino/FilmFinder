import axios from "../utils/axios.js";

const handleSearch = async (search, year) => {
    if (!search) {
        console.log("No search")
        return ["No Search"];
    }

    try {
        const response = await axios.get("https://api.themoviedb.org/3/search/multi", {
            params: {
                query: search,
                language: "en-US",
            },
        });

        console.log("Full API response:", response.data)

        let results = response.data.results || "No results found";
        return results
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default handleSearch;