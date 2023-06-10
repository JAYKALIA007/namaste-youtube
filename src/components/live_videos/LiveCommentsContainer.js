import React, { useEffect, useState } from 'react'
import LiveComment from './LiveComment'
import { useDispatch , useSelector } from 'react-redux'
import { addMessages } from '../../utils/liveChatSlice'
import { generateRandomNames, randomMessageGenerator } from '../../utils/helper'
import { MESSAGE_LENGTH } from '../../utils/constants'

const LiveCommentsContainer = () => {

  const [ liveCommentInput , setLiveCommentInput ] = useState('')  
  const dispatch = useDispatch()
  const liveCommentData = useSelector(store => store.liveChat.messages)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
        //API polling 
        // console.log(`API being polled`)
        let commentData = {
            name : generateRandomNames(),
            message : `${randomMessageGenerator(MESSAGE_LENGTH)} 🚀`
          }
        dispatch(addMessages(commentData))
    }, 1000)

    return()=>{
        clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const addCommentToStore = () => {
    dispatch(addMessages({name : `Jane Doe` , message: liveCommentInput}))
  }

  return (
    <>
        <div className='ml-1 p-2 bg-slate-100 w-8/9 h-[600px] rounded-lg border border-gray-400 flex flex-col-reverse overflow-y-scroll '  >
            {
                liveCommentData.map((comment,index) => {
                    return(
                        <LiveComment key={index} comment={comment} />
                        )
                    }
                )
            }
        </div>
        <form className='ml-1 py-2 w-full' 
              onSubmit={(e)=>{
                e.preventDefault();
                addCommentToStore()
            }} >
            <input 
                className='w-3/4 p-1  mx-2 border border-gray-600 rounded-md'  
                type="text" name="liveMessage" id="liveMessage" 
                placeholder="Enter chat"
                value={liveCommentInput.comment} 
                onChange={(e)=>{
                    setLiveCommentInput(e.target.value)
                }}  
            />
            <button className='p-1 px-2 border border-gray-600 rounded-md bg-gray-200' >
                Send
            </button>
        </form>
    </>

  )
}

export default LiveCommentsContainer