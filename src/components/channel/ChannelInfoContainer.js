import { useEffect, useState } from 'react'
import { MY_API_KEY } from '../../utils/constants'
import { convertToInternationalCurrencySystem } from '../../utils/helper'
import { Link } from 'react-router-dom'
const ChannelInfoContainer = ({data}) => {
    const [ channelInfo , setChannelInfo ] = useState()
    useEffect(()=>{
        fetchChannelInfo(data?.id?.channelId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const fetchChannelInfo = async(channelId) =>{
        const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${MY_API_KEY}`
        const data = await fetch(YOUTUBE_CHANNEL_INFO_URL)
        const jsonData = await data.json()
        // console.log(jsonData?.items[0])
        setChannelInfo(jsonData?.items[0])
    }

    //early return
    if(!channelInfo) return null
    const { snippet , statistics } = channelInfo
    const getSubsCountSuffix = convertToInternationalCurrencySystem(statistics?.subscriberCount)
    return (
        <Link to={`/channel?channelId=${channelInfo?.id}`}>
            <div className='flex flex-row m-1 my-2 p-2 border border-gray-500 rounded-md w-full ' >
                <img className='h-60 w-60 shadow-lg rounded-full ' src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
                <div className='w-2/3 mx-4 mt-1' >
                    <p className='text-xl font-bold mb-2 ' >{snippet?.title}</p>
                    <p className='text-md font-bold mb-2 inline ' >{snippet?.customUrl}</p>
                    <p className='text-sm inline' >{` - ${getSubsCountSuffix} subscribers`}</p>
                    <p className='text-sm ' >{snippet?.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ChannelInfoContainer