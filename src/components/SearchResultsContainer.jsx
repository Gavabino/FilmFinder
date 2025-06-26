import Poster from "./Poster.jsx";
import {useState} from "react";
import SearchPreview from "./SearchPreview.jsx";
import PageNavigator from "./PageNavigator.jsx";
import {getType} from "../utils/utilityFunctions.js";

const SearchResultsContainer = ({ results, searchKeywords }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [active, setActive] = useState(false)
    const [previewInfo, setPreviewInfo] = useState({})

    let newResults = [];
    if (results.length > 100) {
        for (let i = 0; i < results.length; i += 100) {
            newResults.push(results.slice(i, i + 100));
        }
    } else {
        newResults.push(results)
    }

    const handleClick = (movie) => {
        if (active && movie.id === previewInfo.id) {
            setActive(false);
        } else {
            setActive(true);
            setPreviewInfo(movie);
        }
    }

    const handleClose = () => {
        setActive(false);
        setPreviewInfo({})
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="text-white text-2xl p-2 m-1">Results For "{searchKeywords}"</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-2 gap-y-2 m-2 justify-items-center">
                {newResults[currentPage].map((item) =>
                    <Poster
                    key={item.id}
                    id={item.id}
                    type={getType(item)}
                    handleClick={() => handleClick(item)}
                />
                )}
            </div>
            {newResults.length > 1 && <PageNavigator currentPage={currentPage}
                                                     setCurrentPage={setCurrentPage}
                                                     newResults={newResults}

            />}
            <div>
                {active && <div className="absolute top-0 mt-16 h-full">
                    <SearchPreview item={previewInfo} handleClose={handleClose} />
                </div>}
            </div>
        </div>
    )
}

export default SearchResultsContainer;