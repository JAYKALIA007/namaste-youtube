import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

const LiveComment = ({comment}) => {
  return (
    <div className=' my-4 align-middle ' >
        <AiOutlineUser className='text-xl inline ' />
        <span className='ml-2 font-bold text-md ' >{comment.name}</span>
        <span className='ml-4' >{comment.message}</span>
    </div>
  )
}

export default LiveComment