import {useEffect, useState} from "react";
import handleSearch from "../utils/handleSearch.js";
import {MoonLoader} from "react-spinners";

const Searchbar = ({ setSearchResults, setSearchData, setSearchKeywords }) => {
    const [search, setSearch] = useState("")
    const [year, setYear] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController()
        console.log("Current search input:", search);
        const delayDebounce = setTimeout(() => {
            const fetchData = async () => {
                setLoading(true);
                const response = await handleSearch(search, year, controller);
                console.log(response)
                if (response.length > 0) {
                    console.log("Searched")
                    setSearchResults(true)
                }
                setSearchData(response)
                setSearchKeywords(search)
            };
            fetchData().then(() => setLoading(false))
        }, 500);

        return () => {
            clearTimeout(delayDebounce)
            controller.abort()
        };
    }, [search, year]);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value === "") {
            setSearchResults(false)
        }
    }

    return (
        <div className="w-1/4 flex flex-row justify-around items-center">
            <MoonLoader size={20} color={"#dc2626"} loading={loading} />
        <div className="text-xl m-2 w-4/5">
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
        </div>
    )
}

export default Searchbar;