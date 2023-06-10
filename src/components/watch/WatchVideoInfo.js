import React, { useState } from 'react'
import { convertToInternationalCurrencySystem, timeAgo } from '../../utils/helper'
import { AiOutlineLike, AiFillLike, AiOutlineDislike , AiFillDislike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { TfiDownload } from 'react-icons/tfi'
import { RxDotsHorizontal } from 'react-icons/rx'
const WatchVideoInfo = ({videoData , desc, channelInfo}) => {
    const [ showMore, setShowMore ] = useState(false)
    const [ liked, setLiked ] = useState(false)
    const [ disliked, setDisiked ] = useState(false)
    //early return
    if(!videoData) return null
    if(!channelInfo) return null

    const { snippet, statistics } = videoData
    const { title, channelTitle, description, publishedAt, thumbnails } = snippet
    const { viewCount , likeCount } = statistics
    const viewCountInInternationalCurrencySystem = convertToInternationalCurrencySystem(viewCount)
    const likeCountInInternationalCurrencySystem = convertToInternationalCurrencySystem(likeCount)
    const getSubsCountSuffix = convertToInternationalCurrencySystem(channelInfo?.statistics?.subscriberCount)


    // calculate time elapsed
    const timeElapsed = timeAgo(new Date(publishedAt))


  return (
    <div className='mb-10' >
        <span className='text-xl font-bold block my-2' >{title}</span>
        <div className='text-md font-bold my-5 grid grid-flow-col' >
            <div className='col-span-1 ' >
                <div className='grid grid-flow-col' >
                    <img className='h-12 w-12 rounded-full inline mr-2 ' src={thumbnails?.default?.url} alt={snippet?.title} />
                    <div className='flex flex-col relative bottom-2 ' >
                        <span className='font-bold ' >{channelTitle}</span>
                        <span className=' font-light font-sm' >{getSubsCountSuffix} subscribers</span>
                    </div>
                    <div className='text-left' >
                        <button className='bg-black text-white p-2 px-4 rounded-full font-sm ml-4' >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-right col-span-5 relative top-2 ' >
                <div className='inline bg-gray-100 mx-2 py-2 px-4 rounded-full ' >
                    {
                        liked ?    <AiFillLike className='inline text-xl mx-1 cursor-pointer' onClick={()=>(setLiked(false))} />  
                              :    <AiOutlineLike className='inline text-xl mx-1 cursor-pointer'  onClick={()=>(setLiked(true))} />
                    }
                    <span className='text-sm' >{ (likeCountInInternationalCurrencySystem && isNaN(likeCount)) ? `Like` : likeCountInInternationalCurrencySystem}</span>
                    <span className='font-thin mx-1 ' > | </span>
                    {
                        disliked ?    <AiFillDislike className='inline text-xl mx-1 cursor-pointer' onClick={()=>(setDisiked(false))} />  
                                 :    <AiOutlineDislike className='inline text-xl mx-1 cursor-pointer'  onClick={()=>(setDisiked(true))} />
                    }
                </div>
                <div className='inline bg-gray-100 mx-2 py-2 px-4 rounded-full  cursor-pointer ' >
                    <RiShareForwardLine className='inline '  /><span className='px-2 text-sm' >Share</span>
                </div>
                <div className='inline bg-gray-100 mx-2 py-2 px-4 rounded-full  cursor-pointer ' >
                    <TfiDownload className='inline '  /><span className='px-2 text-sm' >Download</span>
                </div>
                <div className='inline bg-gray-100 mx-2 py-2 px-3 rounded-full  cursor-pointer ' >
                    <RxDotsHorizontal className='inline font-bold  '  />
                </div>
            </div>
            
        </div>
        
        <div className=' my-2 p-4 rounded-md bg-gray-100' >
            {showMore ? (
                <>
                    <div className='font-bold' >
                        <span className='mr-2' >{`${viewCount} views |`}</span>
                        <span className='mr-2' >{timeElapsed}</span>
                    </div>
                    <span>{desc}</span>
                    <button className='font-bold text-sm hover:bg-slate-50 px-2 py-1 rounded-md block my-2' 
                        onClick={()=>{
                            setShowMore(false)
                            window.scrollTo(0,0)
                        }}
                    >
                        Show Less
                    </button>
                </>
            ):(
                <>
                    <div className='font-bold ' >
                        <span className='mr-2' >{`${viewCountInInternationalCurrencySystem} views |`}</span>
                        <span className='mr-2' >{timeElapsed}</span>
                    </div>
                    <span>{description.substring(0,200)}...</span>
                    <button className='font-bold text-sm hover:bg-slate-50 px-2 py-1 rounded-md block my-2' 
                        onClick={()=>{setShowMore(true)}}
                    >
                        Show More
                    </button>
                </> 
            )}
        </div>
    </div>
  )
}

export default WatchVideoInfo