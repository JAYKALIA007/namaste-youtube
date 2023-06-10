import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../../utils/helper'
const SuggestedVideoCard = ({data}) => {
    if(!data) return null
    // console.log(data)
    const { snippet } = data
    const { title, channelTitle, thumbnails, publishedAt } = snippet
    //  calculate time elapsed
    const timeElapsed = timeAgo(new Date(publishedAt))

  return (
        (data.id.videoId && 
            <Link to={`/watch?v=${data.id.videoId}`}>
            <div className='w-full mb-2 p-2 flex shadow-sm ' >
                    <div className='w-1/3' >
                        <img className=" h-28 w-40 rounded-lg" src={thumbnails.medium.url} alt={`${title} thumbnail`} />
                    </div>
                    <div className='w-2/3 text-left text-sm' >
                        <p className='font-bold mb-2' >{title}</p>
                        <p className='mb-1' >{channelTitle}</p>
                        <p className='text-gray-700' >{timeElapsed}</p>
                    </div>
            </div>
        </Link>)
  )
}

export default SuggestedVideoCard