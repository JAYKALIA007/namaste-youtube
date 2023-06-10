import Comment from './Comment'

const CommentsList = ({comments}) => {

    //early return
    if(!comments) return null

    return(
        <div>
            {comments.map((comment,index) =>(
                <div key={index} >
                    <Comment data={comment}  />

                    {/* recursively render the comments list component if replies exist */}
                    {comment?.replies && (
                        <div className=' ml-8 border-l-2 border-gray-400' >
                            <CommentsList comments={comment.replies} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CommentsList