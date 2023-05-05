import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import "./ProfileButton.css";
import { IoIosArrowDown } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import ProfilePicture from "../Users/ProfilePicture";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);  
    const [showMenu, setShowMenu] = useState(false);

    let dropdownClassName;
    if (showMenu === true){
        dropdownClassName = "menu-open";
    }else{
        dropdownClassName = "menu-close";
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };



    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <div className="menu-container">
            <div className="dropdown-container">
                <button className="dropdown-button" onClick={()=>setShowMenu(!showMenu)}>
                    <IoIosArrowDown className="arrow-down" />
                </button>
            </div>
            <div className={dropdownClassName}>
                <div className="dropdown-menu">
                    <div className="menu-label"><p>Currently in</p></div>
                    <a href="">
                        <div className="dropdown-user">
                            <div className="dropdown-user-pic">  
                                {sessionUser.imageUrl ?
                                    <ProfilePicture user={sessionUser} medium={true} />
                                    : <FaUserCircle id="profile-pic" />}
                            </div>
                            <div className="dropdown-user-info">
                                <div id="dropdown-username">{user.username}</div>
                                <div id="personal">Personal</div>
                                <div id="dropdown-email">{user.email}</div>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-more-options">
                        <div className="menu-label"><p>More options</p></div>
                        <div className="logout-button" onClick={logout}>
                            <button id="dropdown-logout" >Log Out</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default ProfileButton;