// import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSidebar } from "../utils/showSidebarSlice"
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v")

    // console.log(videoId)

    useEffect(()=>{
        dispatch(closeSidebar())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
        <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchVideo