import React from 'react'
import { commentsList } from '../../utils/constants'
import CommentsList from './CommentsList'
const CommentsContainer = () => {
  return (
    <div>
        <CommentsList comments = {commentsList}  />
    </div>
  )
}

export default CommentsContainer