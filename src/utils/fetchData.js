import axios from "./axios.js";
import {removeDuplicates, shuffleArray} from "./utilityFunctions.js";

const fetchData = async (endpoints) => {
    let data = [];
        for (let i = 0; i < endpoints.length; i++) {
            try {
                const response = await axios.get(endpoints[i]);
                data = [...data, ...response.data.results];
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

    if (endpoints.length > 1) {
        data = shuffleArray(data)
    }
    data = removeDuplicates(data)
    return data
};

export default fetchData;