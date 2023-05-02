import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBoardSavedPin, getPins } from "../../store/pins";
import BoardPreviewCover from "./BoardPreviewCover";
import { Link } from "react-router-dom";
import { timeSince } from "../../util/time_util";
import './BoardIndex.css'

const BoardPreviewContainer = (props) => {
    const { board, user, isUser } = props
    const dispatch = useDispatch();
    // const pins = useSelector(getPins);
    // useEffect(() => {
    //     dispatch(fetchBoardSavedPin(board.id))
    // }, [dispatch, board.id])
    
    
    return (
        // <Link to={`/users/${user.id}/boards/${board.id}`}>
            <div className="board-preview-container">
                <div className="board-preview-cover">
                    <BoardPreviewCover
                        // openModal={openModal}
                        board={board}
                        isUser={isUser}
                        user={user}
                        // pins={pins.slice(0, 3)}
                    />
                </div>
                <div className='board-preview-text'>
                    <h1>{board.name}</h1>
                    <div className='board-preview-subtext'>
                        <p>{`${board.pins.length} Pins`}</p>
                        <p className="updated-at">{timeSince(board.createdAt)}</p>
                    </div>
                </div>
            </div>
        // </Link>
    )
    
}

export default BoardPreviewContainer