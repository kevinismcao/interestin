import React, { useEffect, useMemo, useState } from "react"
import { createBoardPin, deleteBoardPin } from "../../store/boardPins"
import { useDispatch } from "react-redux"
import "./SavePinButton.css"
import { fetchAllBoards, fetchBoards, receiveBoards } from "../../store/boards"
const SavePinButton = (props) => {
    const { boardId, pinId, currentBoardPins } = props
    const dispatch = useDispatch();
   
    const [saved, setSaved] = useState(false)
   

    
    
    useEffect(()=>{
        const currentPinIds = Object.keys(currentBoardPins);
        
        if (currentPinIds.length > 0) {
            setSaved(currentPinIds.includes(pinId.toString()));
        }else{
            setSaved(false)
        }
        
    }, [currentBoardPins, pinId, boardId])

    const handleClick = (e) => {
        e.preventDefault();
        if (saved){
            const boardPinId = currentBoardPins[pinId]
            dispatch(deleteBoardPin(boardPinId));
            dispatch(fetchAllBoards())
            setSaved(false)
        }else{
            dispatch(createBoardPin({
                pin_id: pinId,
                board_id: boardId
            }))
            
            setSaved(true)
        }
    }
        // ? isSavedPin ? unsavePinFromProfile : savePinToProfile
        // : isSavedPin ? unsavePinFromBoard : savePinToBoard
   
    return (
        <div onClick={handleClick} className={`save-pin-button ${saved ? "saved-mode" : "unsaved-mode"}`}>
            <h1 className="save-button-word">
                {saved ? "Saved" : "Save"}
            </h1>
        </div>
    )

}

export default SavePinButton