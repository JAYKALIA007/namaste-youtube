import React from 'react'
import { useSelector } from "react-redux"

const ChannelVideoCard = ({data}) => {
    const  showSidebar  = useSelector(store => store.showSidebar.show)
    console.log(data)

  return (
    <div>
        {/* <div className={`inline-block shadow-lg shadow-slate-300 rounded-md p-4 my-4 ${showSidebar ? 'w-1/5 mx-4  relative left-12' : 'w-1/5 mx-8'} `} >
            <Link to={`/watch?v=${items.id}`}>
            <img className="rounded-lg" src={thumbnails.high.url}  alt="thumbnail"/>
            <p className="text-right relative bottom-7 right-3 text-white text-sm " >{timestamp}</p>
            <p className="text-md font-bold text-gray-700" >{title}</p>
            <p className="text-sm font-bold my-2 text-gray-700" >{channelTitle}</p>
            </Link>
        </div> */}
    </div>
  )
}

export default ChannelVideoCard