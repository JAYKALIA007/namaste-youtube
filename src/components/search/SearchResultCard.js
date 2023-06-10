import React from 'react'
import { Link } from 'react-router-dom'
import ChannelInfoContainer from '../channel/ChannelInfoContainer'
const SearchResultCard = ({ data , isChannel }) => {
    if(!data)return null
    // console.log(data)

    const { snippet, id   } = data
  return (
    isChannel ? (<ChannelInfoContainer  data={data} />) : (
      <Link to={`/watch?v=${id.videoId}`}>
        <div className='flex flex-row m-1 my-2 p-2 border border-gray-500 rounded-md w-full ' >
            <img className='h-60 w-96 shadow-lg rounded-md  ' src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
            <div className='w-2/3 mx-4 ' >
                <p className='text-xl font-bold mb-2 ' >{snippet?.title}</p>
                <p className='text-md font-bold mb-2' >{snippet?.channelTitle}</p>
                <p className='text-sm ' >{snippet?.description}</p>
            </div>
        </div>
      </Link>
    )
  )
}

export default SearchResultCard