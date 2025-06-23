import RowContainer from "./components/RowContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import {useState} from "react";
import SearchResultsContainer from "./components/SearchResultsContainer.jsx";

function App() {
    const [searchResults, setSearchResults] = useState(false)
    const [search, setSearch] = useState([])
    const [searchKeywords, setSearchKeywords] = useState("")

  return (
      <>
          <Navbar setSearchResults={setSearchResults} setSearch={setSearch} setSearchKeywords={setSearchKeywords} />
          {searchResults ? <SearchResultsContainer results={search} searchKeywords={searchKeywords}/> : <RowContainer />}
      </>
  )
}

export default App
