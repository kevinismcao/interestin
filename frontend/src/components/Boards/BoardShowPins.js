import { Link } from "react-router-dom"
import PinsIndex from "../Pins/PinsIndex"
import { useRef, useState } from "react"
import "./BoardShowPins.css"
const BoardShowPins = (props) => {
    const {pins, user, ownsBoard, board, currentBoard, userBoards} = props
    const pinCount = board.pins.length
    
    const plusRef = useRef(null)
    const [plus, setPlus] = useState(false)

    const boardShowButtons = () => {
        return (
            <div className={`board-show-buttons ${!ownsBoard ? "hide" : ""}`}>
                <div className={`add-pin-button`}>
                    <div onClick={()=>setPlus(!plus)} className={`board-show-plus ${plus ? "clicked" : "unclicked"}`}>
                        <i className={`fa-solid fa-plus fa-2xl`}></i>
                    </div>
                    <div className={`plus-menu ${plus ? "open" : "closed"} board-show`}>
                        <p>Create</p>
                        <Link to={"/pin-builder"}>
                            <div className="button-container"><p id="pins-link">Pin</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    
    return (
        <div className="board-show-pins-container">
            <div className='pins-count'>
                {`${pinCount} Pins`}
            </div>
            <PinsIndex
                pins={pins}
                board={board}
                userBoards={userBoards}
                currentBoard = {currentBoard}
            /> 
            {boardShowButtons()}
        </div>
    )
    
}

export default BoardShowPins