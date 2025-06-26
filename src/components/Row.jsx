import {useEffect, useRef, useState} from "react";
import Poster from "./Poster.jsx";
import {useDraggable} from "react-use-draggable-scroll";
import fetchData from "../utils/fetchData.js";
import Preview from "./Preview.jsx";
import {getType} from "../utils/utilityFunctions.js";

const Row = ({ title, endpoints }) => {
    const [data, setData] = useState([])
    const [active, setActive] = useState(false)
    const [previewInfo, setPreviewInfo] = useState(null)

    const ref = useRef()
    const { events } = useDraggable(ref)

    useEffect(() => {
        const getData = async () => {
            let response = await fetchData(endpoints);
            response = response.filter((item) => item.original_language === "en")
            setData(response);
        }
        getData()
    }, [endpoints]);

    const handleClick = (movie) => {
        if (active && movie.id === previewInfo?.id) {
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
                type={getType(item)}
                handleClick={() => handleClick(item)}
            />)}
        </div>
        </div>
            {active && <Preview item={previewInfo} handleClose={handleClose} />}
        </div>
    )
}

export default Row