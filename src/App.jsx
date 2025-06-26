import RowContainer from "./components/RowContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import {useState} from "react";
import SearchResultsContainer from "./components/SearchResultsContainer.jsx";

function App() {
    const [searchResults, setSearchResults] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [searchKeywords, setSearchKeywords] = useState("")

  return (
      <>
          <Navbar setSearchResults={setSearchResults} setSearchData={setSearchData} setSearchKeywords={setSearchKeywords} />
          {searchResults ? <SearchResultsContainer results={searchData} searchKeywords={searchKeywords}/> : <RowContainer />}
      </>
  )
}

export default App
