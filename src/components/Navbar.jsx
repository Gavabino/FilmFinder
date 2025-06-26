import Searchbar from "./Searchbar.jsx";

const Navbar = ({ setSearchResults, setSearchData, setSearchKeywords }) => {
    return (
        <div className="w-screen h-16 bg-neutral-800 flex flex-row justify-between items-center">
            <div className="text-6xl p-1 italic text-red-600">FILMFINDER</div>
            <Searchbar setSearchResults={setSearchResults} setSearchData={setSearchData} setSearchKeywords={setSearchKeywords} />
        </div>
    )
}

export default Navbar;
