import {useEffect, useState} from "react";
import handleSearch from "../utils/handleSearch.js";

const Searchbar = ({ setSearchResults, setSearchData }) => {
    const [search, setSearch] = useState("")
    const [year, setYear] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        console.log("Current search input:", search);
        const delayDebounce = setTimeout(() => {
            const fetchData = async () => {
                const response = await handleSearch(search, year);
                console.log(response)
                setResults(response);
                if (response.length > 0) {
                    console.log("Searched")
                    setSearchResults(true)
                }
                setSearchData(response)
            };
            fetchData()
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [search, year]);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value === "") {
            setSearchResults(false)
        }
    }

    return (
        <div className="text-xl m-2 w-1/5">
            <input type="text"
                   placeholder={"Search"}
                   className="p-1 pl-2 rounded-xl bg-neutral-600 text-neutral-400 w-3/5 m-1 focus:outline-none focus:outline-red-600 focus:ring-0"
                   value={search}
                   onChange={(e) => handleChangeSearch(e)}
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