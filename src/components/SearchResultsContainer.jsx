import Poster from "./Poster.jsx";

const SearchResultsContainer = ({ results }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {results.map((item) =>
                <Poster
                    key={item.id}
                    id={item.id}
                    type={item.original_title ? "movie" : "tv"}
                    item={item}
                />
            )}
        </div>
    )
}

export default SearchResultsContainer;