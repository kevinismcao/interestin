import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { fetchBoardSavedPin, fetchPins } from "../../store/pins"

import { getPins } from "../../store/pins"
import { fetchAllBoards, fetchBoard, getBoard, getBoards } from "../../store/boards"
import { getUser } from "../../store/user"
import BoardEditForm from "./BoardEditForm"
import ProfilePicture from "../Users/ProfilePicture"
import BoardShowPins from "./BoardShowPins"
import { fetchUser } from "../../store/user"
import "./BoardShow.css" 
import { fetchBoardPins } from "../../store/boardPins"

const BoardShow = (props) => {
    
    
    const {boardId} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch =useDispatch();
           
    const [showEditModal, setShowEditModal] = useState(false);
    const pins = useSelector(getPins)
    const board = useSelector(getBoard(boardId))
    const boards = useSelector(getBoards)
    const userBoards = useMemo(() => boards.filter((board) => board.owner.id===sessionUser.id), [boards, sessionUser])
    const currentBoard = useMemo(() => userBoards?.filter((board) => board.id === boardId), [userBoards, boardId])
    const boardSavedPins = useMemo(() => pins.filter((savedPin) => board?.pins.includes(savedPin.id)), [pins, board])
    
    useEffect(()=>{
        dispatch(fetchPins());
        dispatch(fetchAllBoards());
        dispatch(fetchBoardPins());
    },[dispatch])

   
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    if ( board && pins){
        const ownsBoard = (board.owner.id === sessionUser.id)
        const user = board.owner
    return(
        
        <div className='board-show-container'>
            {showEditModal &&
                <BoardEditForm closeModal={() => setShowEditModal(false)} board={board} user={user} />
            }
            <div className="board-show-header">
                <div className="board-show-name">
                    <h1>{board?.name}</h1>
                    <div id="board-show-more-option-container" className={`board${ownsBoard ? "-show" : "-hide"}-options options-${open ? "clicked" : "unclicked"}`}>
                        <p className = "board-show-more-option" onClick={handleClick}>...</p>
                        <div className={`options-menu ${open ? "open" : "closed"}`}>
                            <p>Board options</p>
                            <div onClick={()=>setShowEditModal(!showEditModal)} className="edit-board-option">Edit board</div>
                        </div>
                    </div>
                </div> 
                <div className="board-show-owner">
                    <NavLink to={`/users/${user.id}`}>
                        <div className='board-show-owner-profile'>
                            <ProfilePicture user={ownsBoard ? sessionUser : user} board={true} big={true}/>
                        </div>
                    </NavLink>
                </div>
                <div className={`board-show-description ${board?.description != "" ? "" : "hide"}`}>
                    <p>{board?.description}</p>
                </div>
            </div>
            <div className="board-show-pins">
                <BoardShowPins
                    ownsBoard={ownsBoard}
                    user={user}
                    boardName={board.name}
                    board={board}
                    currentBoard = {currentBoard}
                    userBoards = {userBoards}
                    pins={boardSavedPins}
                    hasPins={board.pins.length != 0}
                />
            </div>
        </div>
    )
        }else{
            return null
        }
    
}


export default BoardShow