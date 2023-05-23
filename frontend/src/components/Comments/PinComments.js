import { useRef } from "react"
import CommentContainer from "./CommentContainer"
import CreateComment from "./CreateComment"
import "./Comments.css"

const PinComments = (props) => {
    
    const {pin, currentUser, users} = props
    const bottomRef = useRef(null)
    const comments = Object.keys(pin.comments).map((commentId) => pin.comments[commentId])
    const commentHeading = () => {
        if (comments.length > 0) {
            return `${comments.length} comments`
        }
        else if (comments.length === 1) {
            return "1 comment"
        }
        else {
            return "Comments"
        }
    }
   

    return (
        <div className='comments-container'>
            <div className='comments-heading'>
                <h1>{commentHeading()}</h1>
                <i className="fa-solid fa-chevron-down fa-sm"></i>
            </div>
            <div className='comments-content'>
                {
                    comments.map((comment, i) => <CommentContainer
                        key={i}
                        pin={pin}
                        currentUser={currentUser}
                        user={users[comment.commentorId]}
                        comment={comment}
                        isAuthor={currentUser.id === comment.commentorId}
                    />)
                }
                <div ref={bottomRef}></div>
            </div>
            <div>
                <CreateComment bottomRef={bottomRef} pin={pin} currentUser={currentUser}/>
            </div>
        </div>
    )

   
}
export default PinComments