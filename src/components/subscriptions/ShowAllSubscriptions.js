import React, { useEffect } from 'react'
import { subscriptionsList } from '../../utils/constants'
import  { Link } from 'react-router-dom'
const ShowAllSubscriptions = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

    // early return
    if(!subscriptionsList) return null
  return (
    <div className='flex flex-wrap w-full m-2' >
        {subscriptionsList.map(subscription => (
            <Link className='w-1/4 h-60 shadow-lg shadow-slate-300 rounded-md p-4 m-10 overflow-scroll'  to={`/channel?channelId=${subscription?.snippet?.channelId}`} key={subscription?.snippet?.channelId}>
            <div className='block' >
                <img className='h-32 rounded-full inline mr-2 shadow-lg ' 
                     src={subscription?.snippet?.thumbnails?.medium?.url} 
                     alt={subscription?.snippet?.channelTitle} 
                />
                <span className='text-lg font-bold' >{subscription?.snippet?.channelTitle}</span>
                <span className='block ' >{subscription?.snippet?.description}</span>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default ShowAllSubscriptions