import React, { useEffect, useState } from 'react'
import { LIVE_VIDEO_QUERY_URL } from '../../utils/constants'
import ShimmerSearchCardContainer from '../shimmer/ShimmerSearchCardContainer'
import SearchResultCard from '../search/SearchResultCard'

const LiveVideosList = () => {
    const [ videoList, setVideoList ] = useState([])
    useEffect(()=>{
        fetchVideosList()
    },[])
    const fetchVideosList = async () => {
        const data = await fetch(LIVE_VIDEO_QUERY_URL)
        const jsonData = await data.json()
        setVideoList(jsonData?.items)
    }

    //early return
    if(!videoList) return null

    return videoList.length === 0 ? <ShimmerSearchCardContainer /> : (
        <div className='w-10/12' >
            {videoList.map(result => (
                <SearchResultCard key={result?.id?.videoId ? result?.id?.videoId : result?.id?.channelId} data={result} isChannel={result?.id?.kind === 'youtube#channel' ? true : false} />
            ))}
        </div>
    )
}

export default LiveVideosList