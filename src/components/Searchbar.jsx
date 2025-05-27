import {useEffect, useState} from "react";
import handleSearch from "../utils/handleSearch.js";

const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [year, setYear] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
         const fetchData = async () => {
            const response = await handleSearch(search, year);
            setResults(response);
        }
        fetchData()
        console.log(results)
    }, [results, search, year])

    return (
        <div className="text-xl m-2 w-1/5">
            <input type="text"
                   placeholder={"Search"}
                   className="p-1 pl-2 rounded-xl bg-neutral-600 text-neutral-400 w-3/5 m-1 focus:outline-none focus:outline-red-600 focus:ring-0"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <input type="text"
                   placeholder={"Year"}
                   className="p-1 pl-2 rounded-xl bg-neutral-600 text-neutral-400 w-1/4 m-1 focus:outline-none focus:outline-red-600 focus:ring-0"
                   value={year}
                   onChange={(e) => setYear(e.target.value)}
            />

        </div>
    )
}

export default Searchbar;