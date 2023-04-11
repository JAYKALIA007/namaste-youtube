// import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSidebar } from "../utils/showSidebarSlice"
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import CommentsContainer from './CommentsContainer';
import LiveCommentsContainer from './LiveCommentsContainer';
import { MY_API_KEY } from '../utils/constants';
import WatchVideoInfo from './WatchVideoInfo';

const WatchVideo = () => {
    const dispatch = useDispatch()

    const [ videoInfo , setVideoInfo ] = useState()
    const [ channelInfo , setChannelInfo ] = useState()
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v")

    // console.log(videoId)

    useEffect(()=>{
        dispatch(closeSidebar())
        window.scrollTo(0,0)
        const getVideoInfoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${MY_API_KEY}`
        fetchVideoInfo(getVideoInfoUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchVideoInfo = async(url) => {
      const data  = await fetch(url)
      const jsonData = await data.json()
      // console.log(jsonData?.items[0])
      setVideoInfo(jsonData?.items[0])
      fetchChannelInfo(jsonData?.items[0]?.snippet?.channelId)
    }
    
    const fetchChannelInfo = async ( channelId ) => {
      const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${MY_API_KEY}`
      const data = await fetch(YOUTUBE_CHANNEL_INFO_URL)
      const jsonData = await data.json()
      // console.log(jsonData?.items[0])
      setChannelInfo(jsonData?.items[0])
    }

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
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className='w-full' >
        <LiveCommentsContainer />
      </div>
    </div>
    
  )
}

export default WatchVideo