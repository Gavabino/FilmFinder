import Poster from "./Poster.jsx";
import {useState} from "react";

const SearchResultsContainer = ({ results }) => {
    const [currentPage, setCurrentPage] = useState(0);

    let newResults = [];
    if (results.length > 100) {
        for (let i = 0; i < results.length; i += 100) {
            newResults.push(results.slice(i, i + 100));
        }
        console.log(newResults)
    } else {
        newResults.push(results)
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-10 gap-x-2 gap-y-2 m-2">
                {newResults[currentPage].map((item) =>
                    <Poster
                    key={item.id}
                    id={item.id}
                    type={item.original_title ? "movie" : "tv"}
                    item={item}
                />
                )}
            </div>
            {newResults.length > 1 && <div className="flex justify-center">
                <p className="text-white text-xl">Testing</p>
            </div>}
        </div>
    )
}

export default SearchResultsContainer;