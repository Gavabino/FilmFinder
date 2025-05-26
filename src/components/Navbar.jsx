import Searchbar from "./Searchbar.jsx";

const Navbar = () => {
    return (
        <div className="w-[vw] h-16 bg-neutral-800 flex flex-row justify-between items-center">
            <p className="text-6xl p-1 italic text-red-600">FILMFINDER</p>
            <Searchbar />
        </div>
    )
}

export default Navbar;
