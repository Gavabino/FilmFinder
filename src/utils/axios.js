import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f9f80a7d58b26e61084db66318849f65",
    }
})

export default instance;