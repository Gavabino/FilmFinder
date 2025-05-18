import Row from "./components/Row.jsx";

function App() {

  return (
      <>
      <Row title={"Trending"} endpoints={["/trending/all/week"]}/>
      </>
  )
}

export default App
