import { useEffect, useState } from "react"
import "./UserShow.css"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser, fetchUserByUsername, getUser, getUserByUsername } from "../../store/user"
import ProfilePicture from "./ProfilePicture"

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
    useEffect(()=> {
        dispatch(fetchUser(userId))
    },[dispatch, userId])
   
    if (user) { 
        const isUser = (sessionUser.id === user.id )

        return (
            <div className= "user-show-container" >
            <div className="user-show-header">
                <div className="user-show-profile-pic">
                    <ProfilePicture user={user} big={true} />
                </div>
                <h1 >{user.username}</h1>
                <p>{`@${user.username}`}</p>
                {/* <div className="user-show-content-labels">
                    <NavLink 
                        to={`/users/${user.id}/created`} 
                        >
                        <h1 onClick={handleClickTab(Tab.CREATED)} className={`${tab === "created" ? "tab-clicked" : "" }`}>Created</h1>
                    </NavLink>
                    <NavLink 
                        to={`/users/${user.id}/saved`} 
                        >
                        <h1 onClick={handleClickTab(Tab.SAVED)} className={`${tab === "saved" ? "tab-clicked" : "" }`}>Saved</h1>
                    </NavLink>
                </div> */}
                {/* <div className={`user-show-plus-container ${!isUser ? "hide" : ""}`}>
                    <div className={`plus-circle-${ plus ? "clicked" : "unclicked"}`}></div>
                        <i ref={plusRef} onClick={handlePlusClick} className={`fa-solid fa-plus fa-2xs plus-${ plus ? "clicked" : "unclicked"}`}></i>
                    <div className={`plus-menu ${ plus ? "open" : "closed"}`}>
                        <p>Create</p>
                        <Link to="/pin-builder">
                            <div>Create pin</div>   
                        </Link>
                        <div onClick={handleOpenModal('create board', {boardShow: false} )}>Create board</div>
                    </div>
                </div> */}
            </div>
            {/* <div className="user-show-content-container">
                {childrenContainers[tab]}
            </div> */}
        </div>
        )
    }else{
        return (
            null
        )
    }
    
    

   

  
}


export default UserShow