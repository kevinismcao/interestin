import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoards, getBoards } from "../../store/boards";
import { Link } from "react-router-dom";
import BoardPreviewContainer from "../Boards/BoardPreview";

const UserShowSaved = (props) => {
    const {isUser, user, userBoards, boards} = props;
    const dispatch = useDispatch();
    const noBoardsCreated = (Object.keys(user.boards).length === 0)

    const noSavedBoardMessage = () => {
        return `${isUser ? "You haven't" : `${user.username} hasn't`} saved any Pins yet`
    }
    
    // useEffect(()=>{
    //     dispatch(fetchBoards(user.id))
    // },[dispatch, user.id])
    
    const noBoards = () => {
        return (
            <div className="no-saved-container">
                <h1>{noSavedBoardMessage()}</h1>
                <Link to="/">
                    <div className={`find-ideas-button ${isUser ? "" : "hide"}`}>
                        <h1>Find ideas</h1>
                    </div>
                </Link>
            </div>
        )
    }

    const boardsIndex = () => {
        return (
            <div className="boards-index-container">
                {
                    boards.map((board, i) => <BoardPreviewContainer
                        key={i}
                        board={board}
                        user={user}
                        isUser={isUser}
                        userBoards = {userBoards}
                        // pins={board.pins.map(id => pins[id])}
                    />)
                }
            </div>
        )

    }


    return (
        <div className='user-show-content'>
            <div className='board-or-nah-container'>
                {noBoardsCreated ? noBoards() : boardsIndex()}
            </div>
        </div>
    )
    


}

export default UserShowSaved