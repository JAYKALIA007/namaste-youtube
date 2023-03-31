import { useEffect, useState } from "react"
import { YOUTUBE_API_URL } from "../utils/constants"
import VideoCard from "./VideoCard"
const VideoContainer = () => {
    const [ videoList , setVideoList ] = useState()
    useEffect(()=>{
        fetchYoutubeData()
    },[])
    const fetchYoutubeData = async () =>{
        const data = await fetch(YOUTUBE_API_URL)
        const jsonData = await data.json()
        // console.log(jsonData.items)
        setVideoList(jsonData.items)
    }

    //early return
    if(!videoList) return null
    return(
        <div className="p-2 flex flex-wrap ">
                {videoList.map(item=>(
                        <VideoCard key={item.id} items={item}/>
                    )
                )}
        </div>
    )
}

export default VideoContainer