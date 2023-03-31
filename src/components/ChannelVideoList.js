import { useEffect , useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MY_API_KEY } from '../utils/constants'
import ChannelVideoCard from './ChannelVideoCard'
import VideoCard from './VideoCard'
const ChannelVideoList = () => {
    const [ searchParams ] = useSearchParams()
    const [ videoList , setVideoList ] = useState()
    // console.log(searchParams.get(`channelId`))
    const channelId = searchParams.get(`channelId`)
    useEffect(()=>{
        fetchVideosByChannelId(channelId)
    },[])
    const fetchVideosByChannelId = async(channelId) => {
        const YOUTUBE_CHANNEL_VIDEO_LIST_URL = `https://www.googleapis.com/youtube/v3/search?key=${MY_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`
        const data = await fetch(YOUTUBE_CHANNEL_VIDEO_LIST_URL)
        const jsonData = await data.json()
        // console.log(jsonData?.items)
        setVideoList(jsonData?.items)
    }

    //early return
    if(!videoList) return null
  return (
    <div className="p-2 flex flex-wrap ">
            {/* {videoList.map(item=>(
                    // <VideoCard key={item.id} items={item}/>
                )
            )} */}
            <ChannelVideoCard data={videoList[0]} />
    </div>
  )
}

export default ChannelVideoList