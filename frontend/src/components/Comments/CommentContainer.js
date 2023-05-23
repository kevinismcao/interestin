import { useRef, useState } from "react"
import UserPreviewContainer from "../Users/UserPreview"
import { deleteComment, updateComment } from "../../store/comments"
import { CloseDropdown } from "../dropdown/CloseDropdown"
import { timeSince } from "../../util/time_util"
import { useDispatch } from "react-redux"
import CreateComment from "./CreateComment"


const CommentContainer = (props) => {
    const dispatch = useDispatch();
    const { comment, user, pin, isAuthor, currentUser} = props
    
    const openRef = useRef(null)
    const [open, setOpen] = CloseDropdown(openRef, false)
    const [edit, setEdit] = useState(false)
    const handleClick = () => setOpen(!open)

    const handleDelete = () => {
        dispatch(deleteComment(pin.id, comment.id))
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            dispatch(updateComment(pin.id, comment.id, state))
                .then(() => setEdit(false))
        }
    }

    const [state, setState] = useState({
        description: comment.description
    })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    return (
        <div className="comment-item">
            <div className='comment-item-content'>
                <div className='comment-user'>
                    <UserPreviewContainer user={user} bold={true} />
                </div>
                <div className='comment-text'>
                    <p className={edit ? "comment-text-hide" : ""}>{comment.description}</p>
                    <input onChange={update('description')} onKeyPress={handleSubmit} className={edit ? "" : "comment-input-hide"} type="text" defaultValue={comment.description} />
                </div>
            </div>
            <div className='comment-extras'>
                <div className={`options-comments-menu ${open ? "open" : "closed"}`}>
                    <div onClick={handleDelete} className="edit-comment-option">Delete</div>
                    <div onClick={handleEdit} className="edit-comment-option">Edit</div>
                </div>
                <div className='updated-at'>
                    {timeSince(comment.createdAt)}
                </div>
                <div className={`${isAuthor ? "" : "comment-edit-hide"} dots`} ref={openRef} >
                    <p onClick={handleClick} >
                        ...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentContainer