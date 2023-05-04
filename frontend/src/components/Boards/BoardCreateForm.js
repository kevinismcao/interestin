import React, { useEffect, useState } from 'react'

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
    const [errors, setErrors] = useState([]);
    const [buttonDisabled, setButtonDisable] = useState(true);
    const [board, setBoard] = useState({
        name: '',
        owner_id: owner_id
    })

    if (!sessionUser) {
        return <Redirect to='/' />
    }

    const update = (field) => {
        return e => {setBoard({
            ...board, [field]: e.currentTarget.value
        })
        setButtonDisable(false)}
    }
    
  
    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(createBoard(board))
            .catch (async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors(data);
                else setErrors([res.statusText]);
                
            })
            .then((status) => status && closeCreateBoardModal())
            .then(()=>{history.push(`/users/${sessionUser.id}/saved`)})
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
                        <ul >
                            {errors.map(error => <p className="board-modal-error-text" key={error}>{error}</p>)}
                        </ul>
                        <button type="submit" className={`${board.name != "" ? "clickable" : ""} board-create-button` } disabled={buttonDisabled}>
                            <h1>Create</h1>
                        </button>
                        
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default BoardCreateForm