import { useEffect, useMemo } from "react"
import PinPhotoContainer from "./PinPhoto"
import "./PinsIndex.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoardPins, getBoardPins } from "../../store/boardPins"
import { fetchAllBoards, fetchBoards, getBoards } from "../../store/boards"

const PinsIndex = ({pins,userBoards}) => {
    const dispatch = useDispatch();
    const boardPins = useSelector(getBoardPins)
    // const boards = useSelector(getBoards)
    
    const sessionUser = useSelector(state => state.session.user)
    const userBoardPins =useMemo(()=> boardPins.filter((boardPin)=> sessionUser.boards.includes(boardPin.boardId)),[boardPins, sessionUser])
    // const userBoards = useMemo(()=> boards.filter((board)=> sessionUser.boards.includes(board.id)),[boards,sessionUser])

    useEffect(()=>{
        dispatch(fetchBoardPins()); 
        // dispatch(fetchAllBoards())
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