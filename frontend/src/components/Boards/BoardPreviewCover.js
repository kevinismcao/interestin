import React, { useEffect, useState } from 'react'
import { fetchBoardSavedPin, fetchPins, getPins } from '../../store/pins';
import { useDispatch, useSelector } from 'react-redux';
import BoardEditForm from './BoardEditForm';
import { Link } from 'react-router-dom';

// import EditBoardButton from '../buttons/edit_board_button'

const BoardPreviewCover = ({ board, isUser, user }) => {
    const pins = useSelector(getPins);
    const dispatch = useDispatch();
    const [showEditModal,setShowEditModal] = useState(false);
    useEffect(() => {
        dispatch(fetchPins());
    }, [dispatch])
    
    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }

    if (pins){
        const boardPins = [];
        pins.forEach(element => {
            if(board.pins.includes(element.id)){
                boardPins.push(element)
            }
        });
    
        return (
        <div className="board-preview-cover-container">
            {showEditModal &&
                    <BoardEditForm closeModal={() => setShowEditModal(false)} board={board} user={user}/>
            }
                
            <Link to={`/boards/${board.id}`}>    
            <div className="board-cover-pictures">
                <div className='cover-panel-1' style={{ backgroundImage: `url(\"${boardPins[0]?.imageUrl ?? ""}\")` }} />
                <div className='cover-column-2'>
                    <div className='cover-panel-2' style={{ backgroundImage: `url(\"${boardPins[1]?.imageUrl ?? ""}\")` }} />
                    <div className='cover-panel-3' style={{ backgroundImage: `url(\"${boardPins[2]?.imageUrl ?? ""}\")` }} />
                </div>
            </div>
            </Link>
            <div onClick={()=>setShowEditModal(!showEditModal)} className={isUser? `preview-board-edit` : 'preview-board-edit-hide'}>
                <div className={`edit-board-button`}>
                    <i className="fa-solid fa-xs fa-pen"></i>
                </div> 
            </div>
        </div>
    )
    }else{
        return null
    }
        
    
    
}

export default BoardPreviewCover