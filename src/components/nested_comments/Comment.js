import React from 'react'
import {AiOutlineUser } from "react-icons/ai";

const Comment = ({ data }) => {
  return (
    <div className='m-2 p-2 bg-gray-100' >
        <div className='flex flex-row' >
            <AiOutlineUser className='text-lg relative top-1' />
            <p className='ml-2 text-lg' >{data?.name}</p>
        </div>
        <p className='ml-2 text-md'>{data.comment}</p>
    </div>
  )
}

export default Comment