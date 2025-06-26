const PageNavigator = ({ currentPage, setCurrentPage, newResults }) => {

    const handleDecrease = () => {
        if (currentPage > 0) {
            setCurrentPage((currentPage - 1));
        }
    }

    const handleIncrease = () => {
        if (currentPage < newResults.length - 1) {
            setCurrentPage((currentPage + 1));
        }
    }

    return (
        <div className="flex justify-center">
            {currentPage > 0 && <button className="w-8 h-8 bg-neutral-800 flex justify-center items-center rounded-l-md" onClick={() => handleDecrease()}>
                <p className="text-red-600">&lt;</p>
            </button>}
            <div className="w-8 h-8 bg-neutral-800 flex justify-center items-center">
                <p className="text-red-600">{currentPage + 1}</p>
            </div>
            {currentPage < newResults.length - 1 && <button className="w-8 h-8 bg-neutral-800 flex justify-center items-center rounded-r-md" onClick={() => handleIncrease()}>
                <p className="text-red-600">&gt;</p>
            </button>}
        </div>
    )
}

export default PageNavigator;
