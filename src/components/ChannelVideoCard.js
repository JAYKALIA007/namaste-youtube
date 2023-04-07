import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
const ChannelVideoCard = ({items}) => {
    const  showSidebar  = useSelector(store => store.showSidebar.show)
    const { snippet } = items 
    const { channelTitle , title, thumbnails } = snippet

  return (
      <div className={`inline-block shadow-lg shadow-slate-300 rounded-md p-4 my-4 ${showSidebar ? 'w-1/5 mx-4  relative left-12' : 'w-1/5 mx-8'} `} >
          <Link to={`/watch?v=${items.id.videoId}`}>
          <img className="rounded-lg" src={thumbnails.high.url}  alt="thumbnail"/>
          <p className="text-md font-bold text-gray-700" >{title}</p>
          <p className="text-sm font-bold my-2 text-gray-700" >{channelTitle}</p>
          </Link>
      </div>
  )
}

export default ChannelVideoCard