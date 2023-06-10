import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
const ChannelVideoCard = ({items}) => {
    const  showSidebar  = useSelector(store => store.showSidebar.show)
    const { snippet } = items 
    const { channelTitle , title, thumbnails } = snippet

  return (
      <div className={`shadow-lg shadow-slate-300 rounded-md p-4 my-4 w-1/5 ${showSidebar ? 'mx-7' : 'mx-9'} mx-7`} >
          <Link to={`/watch?v=${items.id.videoId}`}>
            <img className="rounded-lg h-48 w-full " src={thumbnails.medium.url}  alt="thumbnail" />
            <p className="text-md font-bold text-gray-700" >{title}</p>
            <p className="text-sm font-bold my-2 text-gray-700" >{channelTitle}</p>
          </Link>
      </div>
  )
}

export default ChannelVideoCard



//<div className={`shadow-lg shadow-slate-300 rounded-md p-4 my-4 w-1/5 m-9`} >
