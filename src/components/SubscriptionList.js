import React from 'react'
import { subscriptionsList } from '../utils/constants'
import  { Link } from 'react-router-dom'
export const SubscriptionList = () => {
    if(!subscriptionsList) return null
  return (
    <div>
        {subscriptionsList.map(subscription => (
            <Link to={`/channel?channelId=${subscription?.snippet?.channelId}`} key={subscription?.snippet?.channelId}>
            <div className='block py-2 ' >
                <img className='h-8 rounded-full inline mr-2' 
                     src={subscription?.snippet?.thumbnails?.medium?.url} 
                     alt={subscription?.snippet?.channelTitle} 
                />
                <span>{subscription?.snippet?.channelTitle}</span>
            </div>
            </Link>
        ))}
    </div>
  )
}
