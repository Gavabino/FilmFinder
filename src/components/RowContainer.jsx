import Row from "./Row.jsx";

const RowContainer = () => {
    return (
        <>
            <Row title={"TRENDING"} endpoints={["/trending/all/week", "/trending/tv/week"]}/>
            <Row title={"Upcoming"} endpoints={["/movie/upcoming"]} />
            <Row title={"Popular"} endpoints={["/movie/popular", "/tv/popular"]}/>
            <Row title={"Top Rated"} endpoints={["/movie/top_rated"]}/>
            <Row title={"Action"} endpoints={["discover/movie?with_genres=28&with_original_language=en"]}/>
            <Row title={"Adventure"} endpoints={["discover/movie?with_genres=12&with_original_language=en"]}/>
            <Row title={"Documentary"} endpoints={["discover/movie?with_genres=99&with_original_language=en"]}/>
            <Row title={"Drama"} endpoints={["discover/movie?with_genres=18&with_original_language=en"]}/>
            <Row title={"Horror"} endpoints={["discover/movie?with_genres=27&with_original_language=en"]}/>
            <Row title={"Romance"} endpoints={["discover/movie?with_genres=10749&with_original_language=en"]}/>
        </>
    )
}
export default RowContainer;
