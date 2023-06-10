// import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSidebar } from "../../utils/showSidebarSlice"
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import CommentsContainer from '../nested_comments/CommentsContainer';
import LiveCommentsContainer from '../live_videos/LiveCommentsContainer';
import { MY_API_KEY } from '../../utils/constants';
import WatchVideoInfo from './WatchVideoInfo';
import ShowVideoSuggestions from './ShowVideoSuggestions';

const WatchVideo = () => {
    const dispatch = useDispatch()

    const [ videoInfo , setVideoInfo ] = useState()
    const [ channelInfo , setChannelInfo ] = useState()
    const [ isLiveVideo , setIsLiveVideo ] = useState(false)
    const [ tags, setTags ] = useState()
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v")


    // console.log(videoId)

    useEffect(()=>{
        dispatch(closeSidebar())
        window.scrollTo(0,0)
        const getVideoInfoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${MY_API_KEY}`
        fetchVideoInfo(getVideoInfoUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[videoId])

    const fetchVideoInfo = async(url) => {
      const data  = await fetch(url)
      const jsonData = await data.json()
      // console.log(jsonData?.items[0])
      setVideoInfo(jsonData?.items[0])
      setIsLiveVideo(jsonData?.items[0]?.snippet?.liveBroadcastContent === 'live')
      setTags(jsonData?.items[0]?.snippet.tags)
      fetchChannelInfo(jsonData?.items[0]?.snippet?.channelId)
    }
    
    const fetchChannelInfo = async ( channelId ) => {
      const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${MY_API_KEY}`
      const data = await fetch(YOUTUBE_CHANNEL_INFO_URL)
      const jsonData = await data.json()
      // console.log(jsonData?.items[0])
      setChannelInfo(jsonData?.items[0])
    }

    //early return for 
    if(!tags || !videoInfo || !channelInfo) return null

  return (
    <div className='flex w-full' >
      <div className='flex flex-col w-4/5 '>
        <div className='' >
            <iframe 
                width="1100" 
                height="600" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <br/>
            <WatchVideoInfo videoData={videoInfo} desc={videoInfo?.snippet?.description} channelInfo = {channelInfo}  />
        </div>
        { !isLiveVideo && <CommentsContainer />}
      </div>
      <div className='w-full' >
        { isLiveVideo ? <LiveCommentsContainer /> : <ShowVideoSuggestions tags={tags} />}
      </div>
    </div>
    
  )
}

export default WatchVideo