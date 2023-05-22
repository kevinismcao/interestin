import React, { useEffect, useMemo, useState } from "react"
import { createBoardPin, deleteBoardPin } from "../../store/boardPins"
import { useDispatch } from "react-redux"
import "./SavePinButton.css"
import { fetchAllBoards, fetchBoards } from "../../store/boards"
const SavePinButton = (props) => {
    const { boardId, pinId, currentBoardPins, board, currentUser, addPinToBoard, removePinFromBoard, unsavePin, savePin, isOutside } = props
    const dispatch = useDispatch();
    // console.log(boardPins[1].boardId===boardId, boardPins[1].pinId,"first")
    // const boardPinId = Object.keys(boardPins).find(id => (boardPins[id].boardId === boardId && boardPins[id].pinId === pinId)) 
    // console.log(board, "hello")
    // if (boardId && pinId){
    //     boardPinId = Object.keys(boardPins).find(id => (boardPins[id].boardId === boardId && boardPins[id].pinId === pinId))
    // }
    const [saved, setSaved] = useState(false)

    
    useEffect(()=>{
        const currentPinIds = Object.keys(currentBoardPins);
        if (currentPinIds.length > 0) {
            setSaved(currentPinIds.includes(pinId.toString()));
        }
        
    }, [currentBoardPins, pinId, boardId])

    // console.log(currentBoardPins[pinId])
    // console.log(saved, pinId.toString(), "saved")
    // let saved
    // if((boardPinId === null) || (boardPinId === undefined)){
    //     saved = false
    // };

    
    // if (boardPinId){
    //     setSaved(true)
    // }


    // const [boardPin, setBoardPin] = useState({
    //     pin_id: pinId,
    //     board_id: boardId
    // })
    // const savePinToBoard = (e) => {
    //     e.preventDefault()
    //     createBoardPin(boardPin)
    //     setSaved(true)
    // }
    // const savePinToProfile = (e) => {
    //     e.preventDefault()
    //     savePin(pinId)
    // }
    // const unsavePinFromBoard = (e) => {
    //     e.preventDefault()
    //     removeBoardPin(boardPinId)
    //     setSaved(false)
    // }
    // const unsavePinFromProfile = (e) => {
    //     e.preventDefault(pinId)
    //     unsavePin(pinId)
    // }

    

    const handleClick = (e) => {
        e.preventDefault();
        if (saved){
            const boardPinId = currentBoardPins[pinId]
            dispatch(deleteBoardPin(boardPinId));
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