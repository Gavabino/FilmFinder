import axios from "./axios.js";

const fetchData = async (endpoints) => {
    let data = [];
        for (let i = 0; i < endpoints.length; i++) {
            try {
                const response = await axios.get(endpoints[i]);
                data += (response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    return data
};

export default fetchData;