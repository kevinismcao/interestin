import { Redirect, useHistory } from "react-router-dom"
import { deletePin } from "../../store/pins"
import "./PinDeleteForm.css"
import { useDispatch, useSelector } from "react-redux"

const PinDeleteForm = (props) => {
    const { closePinDeleteModal, pin} = props
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const handleDeleteClick=(e)=> {
        e.preventDefault();
        dispatch(deletePin(pin.id))
            .then(()=>closePinDeleteModal())
            .then((status) => status && window.history.back())
    }
    return(
        <div className='delete-pin-modal-container'>
            <div className="delete-pin-modal-background" onClick={closePinDeleteModal}></div>
            <div className="delete-pin-modal-foreground">
                <div className="delete-pin-modal-container">
                    <div className="delete-pin-modal-title-box">
                        <div className="delete-pin-modal-title">
                            <p>Are you sure?</p>
                        </div>
                    </div>
                    <div className="delete-pin-modal-title-confirm">
                        <div className="delete-pin-modal-confirm-box">
                            <div className="delete-pin-modal-confirm">
                                <p>Once you delete a Pin, you can't undo it!</p>
                            </div>
                        </div>
                    </div>
                    <div className="delete-pin-options">
                        <div className="delete-pin-options-box">
                            <div className="delete-pin-options-flexbox">
                                <div onClick={closePinDeleteModal} className='delete-pin-button-cancel'>
                                    <h1 className="button-text">Cancel</h1>
                                </div>
                                <div onClick={()=>handleDeleteClick} className='delete-pin-button-delete'>
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