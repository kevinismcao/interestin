import { useState } from "react"
import ProfilePicture from "../Users/ProfilePicture"
import { createComment } from "../../store/comments"
import { useDispatch } from "react-redux"


const CreateComment = ({ currentUser, pin }) => {
    const dispatch = useDispatch();

    const [comment, setComment] = useState({
        description: ""
    })
   
    const update = (field) => {
        return e => setComment({
            ...comment, [field]: e.currentTarget.value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createComment(pin.id, comment));
        setComment({ description: '' })
    }

    
    return (
        <div className='create-comment'>
            <ProfilePicture user={currentUser} />
            <input
                value={comment.description}
                onChange={update('description')}
                placeholder="say something"
                type="text"
            />
            <div onClick={handleCreate} className={`${comment.description === "" ? "not-clickable" : ""} button-save`}>
                <h1 className="done-text">Done</h1>
            </div>
        </div>
    )
    

      
    
}
export default CreateComment