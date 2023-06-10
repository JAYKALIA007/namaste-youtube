import { useEffect , useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MY_API_KEY } from '../../utils/constants'
import ChannelVideoCard from './ChannelVideoCard'
import ShimmerVideoCardContainer from '../shimmer/ShimmerVideoCardContainer'
const ChannelVideoList = () => {
    const [ searchParams ] = useSearchParams()
    const [ videoList , setVideoList ] = useState([])
    // console.log(searchParams.get(`channelId`))
    const channelId = searchParams.get(`channelId`)
    useEffect(()=>{
        fetchVideosByChannelId(channelId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[channelId])
    const fetchVideosByChannelId = async(channelId) => {
        const YOUTUBE_CHANNEL_VIDEO_LIST_URL = `https://www.googleapis.com/youtube/v3/search?key=${MY_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`
        const data = await fetch(YOUTUBE_CHANNEL_VIDEO_LIST_URL)
        const jsonData = await data.json()
        // console.log(jsonData?.items)
        setVideoList(jsonData?.items)
    }

    //early return
    if(!videoList) return null
  return videoList.length === 0  ? (<ShimmerVideoCardContainer />) : (
    <div className="p-2  w-full flex flex-wrap">
            {videoList.map(item=>(
                    <ChannelVideoCard key={item.id.videoId} items={item}/>
                )
            )}
    </div>
  )
}

export default ChannelVideoList