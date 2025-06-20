import {useEffect, useRef, useState} from "react";
import Poster from "./Poster.jsx";
import {useDraggable} from "react-use-draggable-scroll";
import fetchData from "../utils/fetchData.js";
import Preview from "./Preview.jsx";

const Row = ({ title, endpoints }) => {
    const [data, setData] = useState([])
    const [active, setActive] = useState(false)
    const [previewInfo, setPreviewInfo] = useState({})

    const ref = useRef()
    const { events } = useDraggable(ref)

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData(endpoints);
            setData(response);
        }
        getData()
    }, [endpoints]);

    const handleClick = (movie) => {
        if (active && movie.id === previewInfo.id) {
            setActive(false);
        } else {
            setActive(true);
            setPreviewInfo(movie);
        }
    };

    const handleClose = () => {
        setActive(false);
        setPreviewInfo({})
    }

    return (
        <div className="m-2">
            <p className={"text-white text-4xl p-1"}>{title}</p>
        <div className='overflow-x-auto no-scrollbar'  { ...events } ref={ref}>
        <div className="flex flex-nowrap h-auto gap-3 p-3">
            {data.map((item) => <Poster
                key={item.id}
                id={item.id}
                type={item.original_title ? "movie" : "tv"}
                item={item}
                handleClick={() => handleClick(item)}
            />)}
        </div>
        </div>
            {active && <Preview item={previewInfo} handleClose={handleClose} />}
        </div>
    )
}

export default Row