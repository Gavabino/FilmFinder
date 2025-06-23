import axios from "../utils/axios.js";

const handleSearch = async (search, year) => {
    if (!search) {
        console.log("No search")
        return [];
    }

    try {
        const response = await axios.get("/search/multi", {
            params: {
                query: search,
                language: "en-US",
            },
        });

        console.log("Full API response:", response.data)

        let results = response.data.results || [];

        for (let i = 1; i <= response.data.total_pages; i++) {
            const response = await axios.get("/search/multi", {
                params: {
                    query: search,
                    language: "en-US",
                    page: i,
                },
            });
            results = [...results, ...response.data.results];
        }

        results = results.filter((item) => item.poster_path)
        results = results.filter((item) => item.backdrop_path)
        results = results.filter((item) => item.original_language === "en")
        results.sort((a, b) => b.popularity - a.popularity)

        const removeDuplicates = (array) => {
            const seen = new Set();

            return array.filter((item) => {
                if (!seen.has(item.id)) {
                    seen.add(item.id);
                    return true;
                }
                return false;
            })
        }

        if (year) {
            results = results.filter((item) => {
                const date = item.release_date || item.first_air_date || "";
                return date.startsWith(year);
            });
        }

        results = removeDuplicates(results)

        return results
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default handleSearch;