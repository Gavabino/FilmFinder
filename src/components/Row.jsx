import {useEffect, useRef, useState} from "react";
import Poster from "./Poster.jsx";
import {useDraggable} from "react-use-draggable-scroll";
import fetchData from "../utils/fetchData.js";
import {v4 as uuidv4} from "uuid";

const Row = ({ title, endpoints }) => {
    const [data, setData] = useState([])
    const ref = useRef()
    const { events } = useDraggable(ref)

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData(endpoints);
            setData(response);
        }
        getData()
    }, [endpoints]);

    return (
        <div className="m-2">
            <p className={"text-white text-4xl p-1"}>{title}</p>
        <div className='overflow-x-auto'  { ...events } ref={ref}>
        <div className="flex flex-nowrap h-auto gap-3 p-3">
            {data.map((item) => <Poster key={uuidv4()} id={item.id} type={item.original_title ? "movie" : "tv"}/>)}
        </div>
        </div>
        </div>
    )
}

export default Row