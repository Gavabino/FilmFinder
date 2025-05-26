import axios from "./axios.js";

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

const shuffleArray = (array) => {
    for  (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const removeDuplicates = (array) => {
    const seen = new Set();

    return array.filter((item) => {
        if (!seen.has(item.id)) {
            seen.add(item.id);
            return true;
        }
        console.log("Item Removed")
        return false;
    })
}

export default fetchData;