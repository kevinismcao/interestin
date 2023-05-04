import { useHistory } from "react-router-dom";
import "./PinEditForm.css"
import { useDispatch, useSelector } from "react-redux";
import { updatePin } from "../../store/pins";
import { useState } from "react";
import PinDeleteForm from "./PinDeleteForm";
import { createBoardPin } from "../../store/boardPins";

const PinEditForm = (props) => {
    const dispatch = useDispatch()
    const {closeModal, pin, userBoards} = props;
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user)
    // const userBoards = sessionUser.boards.map((boardId) => boards[boardId])
    const [showPinDeleteModal, setShowPinDeleteModal]=useState(false)
    const [boardSelectedId, setBoardSelectedId] = useState(0)

    const [newPin, setNewPin] = useState({
        title: pin.title,
        description: pin.description ? pin.description : "",
        id: pin.id
    })
    const update = field => {
        return e=> setNewPin({
            ...newPin, [field]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePin(newPin))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors(data);
                else setErrors([res.statusText])
            })
            .then((status) => status && closeModal())
            .then(()=>history.push(`/pins/${pin.id}`))
            .then(()=>{
                dispatch(createBoardPin({
                    pin_id: pin.id,
                    board_id: boardSelectedId
                }))
            })
    }
   
    const handleSelection = (e) => {
        let value = e.target.value;
        setBoardSelectedId(value)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        closeModal()
    }

    return(
        <div>
            {showPinDeleteModal && 
                    <PinDeleteForm closePinDeleteModal={()=>setShowPinDeleteModal(false)} pin={pin}/>
                }
            <div className={showPinDeleteModal ? "pin-edit-form-modal-container-hide" : "pin-edit-form-modal-container"}>
                
                <div className="pin-edit-form-modal-background" onClick={closeModal}></div>
                <div className="pin-edit-form-modal-foreground">
                    <form className="pin-edit-form-container" onSubmit={handleSubmit} action="">
                        <div className="pin-edit-heading">
                            <p className="pin-edit-heading-text">Edit this Pin</p>
                        </div>
                        <div className="form-form-container" >
                            <div className="pin-edit-form">
                                <div className="pin-edit-left">
                                    <div className="pin-edit-board">
                                        <div className="pin-edit-label-container">
                                            <label className="pin-edit-label">Board</label>
                                        </div>
                                        <div className="pin-edit-board-select">
                                            <div className="pin-edit-board-select-box">
                                                <select
                                                    id="pin-edit-board"
                                                    onChange={handleSelection}
                                                > 
                                                    
                                                    {userBoards.map((userBoard, i) => <option key={i} value={`${userBoard.id}`}>{userBoard.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-divide"></div>
                                    <div className="pin-edit-title">
                                        <div className="pin-edit-label-container">
                                            <label htmlFor="pin-edit-label">Title</label>
                                        </div>
                                        <div className="pin-edit-title-input">
                                            <input
                                                id="pin-edit-title"
                                                type="textbox"
                                                
                                                placeholder={pin.title}
                                                onChange={update('title')}
                                            />
                                        </div>

                                    </div>
                                    <div className="line-divide"></div>
                                    <div className="pin-edit-description">
                                        <div className="pin-edit-label-container">
                                            <label htmlFor="pin-edit-description">Description</label>
                                        </div>
                                        <div className="pin-edit-description-input">
                                            <input
                                                id="pin-edit-description"
                                                type="textbox"
                                                placeholder={pin.description}
                                                onChange={update('description')}
                                            />
                                        </div>
                                    </div>
                                    <ul >
                                        {errors.map(error => <p className="board-modal-error-text" key={error}>{error}</p>)}
                                    </ul>
                                </div>
                            
                                <div className="pin-edit-photo">
                                    <div className="div-image" >
                                        <div className="image-preview-box">
                                            <img src={`${pin.imageUrl}`}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-form-buttons">
                            <div className="edit-form-buttons-container">
                                <div className="edit-form-buttons-box">
                                    <div className="edit-form-buttons-left">
                                        <div className={`button-delete`} onClick={()=>setShowPinDeleteModal(!showPinDeleteModal)}>
                                            <h1 className="button-text">Delete</h1>

                                        </div> 
                                    </div>
                                    <div className="edit-form-buttons-right">
                                        <div onClick={handleCancel} className={`button-cancel`}>
                                            <h1 className="button-text">Cancel</h1>
                                        </div>
                                        <button type="submit" className={`button-save`} >
                                            <h1 className="button-text">Save</h1>
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    )
}

export default PinEditForm