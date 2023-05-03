import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { deleteBoard } from '../../store/boards';
import "./BoardDeleteForm.css"

const BoardDeleteForm = (props) => {
    const { closeBoardDeleteModal, board, user} = props;
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(board.id)

    const handleDeleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteBoard(user.id, board.id))
        history.push(`/users/${user.id}`)
    }
   
    const handleCancelClick = (e) => {
        e.preventDefault()
        closeBoardDeleteModal()
    }

    return (
        <div className='delete-board-modal-container'>
            <div className='delete-board-modal-flex-container'>
                <div className="delete-board-modal-background" onClick={closeBoardDeleteModal}></div>
                <div className="delete-board-modal-foreground">
                    <div className='delete-board-modal-box'>
                    <div className='delete-board-text-box'>
                        <h1>Are you sure?</h1>
                        <p>Once you delete a board and all its Pins, you can't undo it!</p>
                    </div>
                    <div className="delete-board-options">
                        <div onClick={handleCancelClick} className='cancel-delete-board'>
                            <h3>Cancel</h3>
                        </div>
                        <div onClick={handleDeleteClick} className='delete-board-button'>
                            <h3>Delete forever</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardDeleteForm