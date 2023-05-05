import { useEffect, useMemo, useRef, useState } from "react"
import "./UserShow.css"
import { Link, NavLink, useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser, fetchUserByUsername, getUser, getUserByUsername } from "../../store/user"
import ProfilePicture from "./ProfilePicture"
import UserShowCreated from "./UserShowCreated"
import UserShowSaved from "./UserShowSaved"
import BoardCreateForm from "../Boards/BoardCreateForm"
import CloseDropdown from "../dropdown/CloseDropdown"
import { fetchAllBoards, fetchBoards, getBoards } from "../../store/boards"

const Tab = {
    SAVED: "saved",
    CREATED: "created"
}
const UserShow = (params) => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const [saved, setSaved] = useState(true)
    const user = useSelector(getUser(userId))
    const sessionUser = useSelector(state => state.session.user)
    const [tab, setTab] = useState(Tab.SAVED)
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false)
    const plusRef = useRef(null)
    const [plus, setPlus] = useState(false)
    const isUser = (sessionUser.id === user?.id)
    const location = useLocation();
    const { pathname } = location;
   
    // if(pathname.split("/")[3]?.toLowerCase() === "created"){
    //     setTab(Tab.CREATED)
    // }else{
    //     setTab(Tab.SAVED)
    // }
    // // ? 
    // : ;
    const boards = useSelector(getBoards)
    const userBoards = useMemo(() => boards.filter((board) => board.owner.id === sessionUser.id), [boards, boards.length, sessionUser])
    const profileUserBoards = useMemo(() => boards.filter((board) => board.owner.id === user?.id), [boards, boards.length, user])
    // useEffect(() => {
    //     dispatch(fetchBoards())
    // }, [dispatch])
    useEffect(() => {
       if(pathname.split("/")[3]?.toLowerCase() === "created")
        {setTab(Tab.CREATED)
    }else {
        setTab(Tab.SAVED)}
        dispatch(fetchAllBoards())
    }, [dispatch, userId])
    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [dispatch, userId])
    
    const handleClickTab = tab => e => {
        setTab(tab)
    }

    // const handlePlusClick = () => {
    //     setPlus(!plus)
    // }
    const childrenContainers = {
        [Tab.SAVED]: <UserShowSaved
            user={user}
            isUser={isUser}
            boards={profileUserBoards}
            
        />,
        [Tab.CREATED]: <UserShowCreated
            user={user}
            isUser={isUser}
            boards={profileUserBoards}
            userBoards={userBoards}
            
        />,
    }


    if (user) {
        const isUser = (sessionUser.id === user.id)

        return (
            <div className="user-show-container" >
                {showCreateBoardModal &&
                    <BoardCreateForm closeCreateBoardModal={() => { 
                        setShowCreateBoardModal(false)
                        }
                    } />
                }
                <div className="user-show-header-contianer">
                    <div className="user-show-header">
                        <div className="user-show-profile-pic">
                            <ProfilePicture user={user} big={true} />
                        </div>
                        <h1 >{user.username}</h1>
                        <p>{`@${user.username}`}</p>
                    </div>
                </div>
                <div className="user-show-content-container">
                    <div className="user-show-content-labels">
                        <div className="user-show-content-flexbox">
                            <NavLink
                                to={`/users/${user.id}/created`}
                            >
                                <div className="create-save-button"><p onClick={handleClickTab(Tab.CREATED)} className={`${tab === "created" ? "tab-clicked" : ""}`}>Created</p></div>
                            </NavLink>
                            <NavLink
                                to={`/users/${user.id}/saved`}
                            >
                                <div className="create-save-button"><p onClick={handleClickTab(Tab.SAVED)} className={`${tab === "saved" ? "tab-clicked" : ""}`}>Saved</p></div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={`user-show-plus-container ${!isUser ? "hide" : ""}`}>
                    <div className={`plus-circle-${plus ? "clicked" : "unclicked"}`}></div>
                    <i ref={plusRef} onClick={() => setPlus(!plus)} className={`fa-solid fa-plus fa-2xs plus-${plus ? "clicked" : "unclicked"}`}></i>
                    <div className={`plus-menu ${plus ? "open" : "closed"}`}>
                        <p className="plus-menu-title">Create</p>
                        <Link to="/pin-builder">
                            <div className="button-container"><p className="plus-create-click">Create pin</p></div>
                        </Link>
                        <div className="button-container" onClick={() => { setShowCreateBoardModal(!showCreateBoardModal); setPlus(!plus) }} ><p className="plus-create-click">Create board</p></div>
                    </div>
                </div>
                < div className="user-show-saved-created-container" >
                    <div className="user-show-saved-created-box">
                    {childrenContainers[tab]}
                    </div>
                </div>
            </div>
        ) 
    } else {
        return (
            null
        )
    }
}

export default UserShow