import RowContainer from "./components/RowContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import {useState} from "react";
import SearchResultsContainer from "./components/SearchResultsContainer.jsx";

function App() {
    const [searchResults, setSearchResults] = useState(false)
    const [search, setSearch] = useState([])

  return (
      <>
          <Navbar setSearchResults={setSearchResults} setSearch={setSearch}/>
          {searchResults ? <SearchResultsContainer results={search}/> : <RowContainer />}
      </>
  )
}

export default App
