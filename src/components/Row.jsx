import {useEffect, useRef, useState} from "react";
import Poster from "./Poster.jsx";
import {useDraggable} from "react-use-draggable-scroll";
import fetchData from "../utils/fetchData.js";

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
    console.table(data)
    return (
        <div>
            <p>{title}</p>
        <div className='overflow-x-auto'  { ...events } ref={ref}>
        <div className="flex flex-nowrap h-auto gap-2">
            {data.map((item) => <Poster key={item.id} id={item.id} type={item.media_type}/>)}
        </div>
        </div>
        </div>
    )
}

export default Row