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

    const handleDecrease = () => {
        if (currentPage > 0) {
            setCurrentPage((currentPage - 1));
        }
    }

    const handleIncrease = () => {
        if (currentPage < results.length) {
            setCurrentPage((currentPage + 1));
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-10 gap-x-2 gap-y-2 m-2 justify-items-center">
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
                {currentPage > 0 && <div className="w-8 h-8 bg-neutral-800 flex justify-center items-center rounded-l-md" onClick={() => handleDecrease()}>
                    <p className="text-red-600">&lt;</p>
                </div>}
                <div className="w-8 h-8 bg-neutral-800 flex justify-center items-center">
                    <p className="text-red-600">{currentPage + 1}</p>
                </div>
                {currentPage < results.length && <div className="w-8 h-8 bg-neutral-800 flex justify-center items-center rounded-r-md" onClick={() => handleIncrease()}>
                    <p className="text-red-600">&gt;</p>
                </div>}
            </div>}
        </div>
    )
}

export default SearchResultsContainer;