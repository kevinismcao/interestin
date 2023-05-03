import React, { useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from "react-router-dom";
import { createBoard } from '../../store/boards';
import "./BoardCreateForm.css"

const BoardCreateForm = (params) => {
    const {closeCreateBoardModal} = params
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const owner_id = sessionUser.id
    
    const [board, setBoard] = useState({
        name: '',
        owner_id: owner_id
    })

    if (!sessionUser) {
        return <Redirect to='/' />
    }

    const update = (field) => {
        return e => setBoard({
            ...board, [field]: e.currentTarget.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(board,"board")
        dispatch(createBoard(board));
        closeCreateBoardModal();
        history.push(`/users/${sessionUser.id}`)    
        
    }


    return (
        <div className='create-board-container'>
            <div className='create-board-flex-container'>
                <div className="create-board-background" onClick={closeCreateBoardModal}></div>
                <div className='create-board-foreground'>
                    <div className="create-board-header">
                        <h1 className='create-board-header-text'>Create board</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='create-board-input-container'>
                            <label htmlFor="modal-board-name">Name</label>
                            <input
                                id="modal-board-name"
                                type="text"
                                onChange={update('name')}
                                placeholder='Like "Places to Go" or "Recipes to Make"'
                            />
                        </div>
                        <button type="submit" className={`${board.name != "" ? "clickable" : ""} board-create-button`}>
                            <h1>Create</h1>
                        </button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default BoardCreateForm