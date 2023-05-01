import { Redirect, useHistory } from "react-router-dom"
import { deletePin } from "../../store/pins"
import "./PinDeleteForm.css"
import { useDispatch, useSelector } from "react-redux"

const PinDeleteForm = (props) => {
    const { closePinDeleteModal, pin} = props
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    console.log(pin)
    console.log(closePinDeleteModal,"close")

    const handleDeleteClick=(e)=> {
        e.preventDefault();
        dispatch(deletePin(pin.id));
        history.push(`/users/${sessionUser.id}`)
    }
    return(
        <div className='delete-board-modal-container'>
            <div className="delete-board-modal-background" onClick={closePinDeleteModal}></div>
            <div className="delete-board-modal-foreground">
                <div className="delete-board-modal-container">
                    <div className="delete-board-modal-title-box">
                        <div className="delete-board-modal-title">
                            <p>Are you sure?</p>
                        </div>
                    </div>
                    <div className="delete-board-modal-title-confirm">
                        <div className="delete-board-modal-confirm-box">
                            <div className="delete-board-modal-confirm">
                                <p>Once you delete a board, you can't undo it!</p>
                            </div>
                        </div>
                    </div>
                    <div className="delete-board-options">
                        <div className="delete-board-options-box">
                            <div className="delete-board-options-flexbox">
                                <div onClick={closePinDeleteModal} className='delete-board-button-cancel'>
                                    <h1 className="button-text">Cancel</h1>
                                </div>
                                <div onClick={handleDeleteClick} className='delete-board-button-delete'>
                                    <h1 className="button-text">Delete</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default PinDeleteForm