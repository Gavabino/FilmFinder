import axios from "../utils/axios.js";
import {removeDuplicates} from "./utilityFunctions.js";

const handleSearch = async (search, year, controller) => {
    if (!search) {
        return [];
    }

    try {
        const response = await axios.get("/search/multi", {
            params: {
                query: search,
                language: "en-US",
            },
            signal: controller.signal
        });

        let results = response.data.results || [];

        for (let i = 2; i <= response.data.total_pages; i++) {
            const response = await axios.get("/search/multi", {
                params: {
                    query: search,
                    language: "en-US",
                    page: i,
                },
            });
            results = [...results, ...response.data.results];
        }

        results = results.filter((item) =>
            item.poster_path &&
            item.backdrop_path &&
            item.original_language === "en"
        )

        results.sort((a, b) => b.popularity - a.popularity)

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
        return [];
    }
}

export default handleSearch;