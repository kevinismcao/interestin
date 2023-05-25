import { useEffect, useMemo } from "react"
import PinPhotoContainer from "./PinPhoto"
import "./PinsIndex.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoardPins, getBoardPins } from "../../store/boardPins"
import { fetchAllBoards, fetchBoards, getBoards } from "../../store/boards"

const PinsIndex = ({pins,userBoards}) => {
    const dispatch = useDispatch();
    const boardPins = useSelector(getBoardPins)  
    const sessionUser = useSelector(state => state.session.user)
    const userBoardPins = useMemo(() => boardPins.filter((boardPin) => userBoards.map(userBoard => userBoard.id === boardPin.boardId)),[boardPins, userBoards])

    useEffect(()=>{
        dispatch(fetchBoardPins()); 
        
    }, [dispatch])
    
    return (
        <div className="pins-index-container">
            
            {
                pins.map((pin, i)  => <PinPhotoContainer 
                                        key = {i}
                                        board = {null}
                                        pin = {pin}
                                        currentUser={sessionUser}
                                        // boards = {boards}
                                        userBoards = {userBoards}
                                        boardPins = {userBoardPins}
                                        uploader = {pin.uploader}
                />)
                
            }
        </div>
    )
}

export default PinsIndex