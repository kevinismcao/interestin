import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateBoard } from "../../store/boards";
import "./BoardEditForm.css"
import BoardDeleteForm from "./BoardDeleteForm";

const BoardEditForm = (props) => {

    const { user, board, closeModal} = props;
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [name, setName] = useState(board.name)
    const [description, setDescription] = useState(board.description)
    const [showBoardDeleteModal, setShowBoardDeleteModal] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        let newBoard = {...board};
        newBoard["name"] = name;
        newBoard["description"] = description;
        console.log(newBoard)
        dispatch(updateBoard(user.id, newBoard));
        closeModal()
    }


    const handleCancel = (e) => {
        e.preventDefault();
        closeModal()
    }
    

    return(
        <div>
            { showBoardDeleteModal && 
                    <BoardDeleteForm closeBoardDeleteModal = {()=>setShowBoardDeleteModal(false)} board={board} user={user}/>

                }
            <div className={ showBoardDeleteModal ? "edit-board-hide" : "edit-board"}>
                
                <div className="edit-board-background" onClick={closeModal}></div>
                <div className="edit-board-foreground">
                    <div className='edit-board-container'>
                        <div>
                            <p className="edit-board-header">Edit your board</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='create-board-input-container'>
                                <label htmlFor="modal-board-name">Name</label>
                                <input className="edit-board-input"
                                    id="modal-board-name"
                                    type="text"
                                    placeholder={board.name}
                                    onChange={(e)=>setName(e.currentTarget.value)}
                                />
                            </div>
                            {/* {renderErrors()} */}
                            <div className='create-board-description-container'>
                                <label htmlFor="modal-board-description">Description</label>
                                <input className="edit-board-input"
                                    id="modal-board-description"
                                    type="text"
                                    placeholder={board.description ? board.description : "What's your board about?" }
                                    onChange={(e) => setDescription(e.currentTarget.value)}
                                />
                            </div>
                            <div className='delete-board-container'>
                                <label className="modal-action">Action</label>
                                <div onClick={()=>setShowBoardDeleteModal(!showBoardDeleteModal)}
                                    className='delete-board'>
                                    <h1 className="delete-title">Delete board</h1>
                                    <p className="delete-warning">Delete this board and all its Pins forever. <br/>
                                    You can't undo this!</p>
                                </div>
                            </div>
                            <button type='submit' className={`${board.name != "" ? "clickable" : ""} board-update-button`}>
                                <h1 className="board-update-button-text">Done</h1>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardEditForm