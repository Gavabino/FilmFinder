import Row from "./Row.jsx";

const RowContainer = () => {
    return (
        <>
            <Row title={"Trending"} endpoints={["/trending/all/week", "/trending/tv/week"]}/>
            <Row title={"Upcoming"} endpoints={["/movie/upcoming"]} />
            <Row title={"Popular"} endpoints={["/movie/popular", "/tv/popular"]}/>
            <Row title={"Top Rated"} endpoints={[]}/>
            <Row title={"Action"} endpoints={[]}/>
            <Row title={"Adventure"} endpoints={[]}/>
            <Row title={"Documentary"} endpoints={[]}/>
            <Row title={"Drama"} endpoints={[]}/>
            <Row title={"Horror"} endpoints={[]}/>
            <Row title={"Romance"} endpoints={[]}/>
        </>
    )
}
export default RowContainer;
