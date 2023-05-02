import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import "./index.css";
import logo from '../../assets/image/logo3.png';
import LoginSignupModal from '../LoginSignupModal';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import ProfilePicture from '../Users/ProfilePicture';

function Navigation() {
   
    const sessionUser = useSelector(state => state.session.user) ;
    let sessionLinks;
    const [homeClassName, setHomeClassName] = useState('nav-button-on')
    const [createClassName, setCreateClassName] = useState('nav-button-off')

    const onHome = useLocation().pathname === "/"
    const onCreate = useLocation().pathname === "/pin-builder"
    
    if (sessionUser) { 
        
        return (
            <div className='header-nav-container'>
                <ul className='nav-bar'>
                    <div className='left-nav'>
                        <div className='nav-logo'>
                            <NavLink className='nav-logo-container' to="/">
                                <img className="logo" src={logo} />
                            </NavLink>
                        </div>
                        <NavLink to="/" className={onHome ? 'nav-button-on' : 'nav-button-off'} >
                            <div  className='nav-container'><span className="nav-title">Home</span></div>
                        </NavLink>
                        <NavLink to="/pin-builder" className={ onCreate? 'nav-button-on': 'nav-button-off' }>
                            <div  className='nav-container'><span className="nav-title">Create</span></div>
                        </NavLink>
                    </div>
                    <div className='nav-search-bar-container'>
                        <div className='search-bar'>
                            <div className='search-bar-background'>
                                <div className='magnifying-glass'><RxMagnifyingGlass id="mag-glass"/></div>
                                <div className='search-input-box'><input id='search-input' type="text" placeholder='Search'/></div>
                            </div>
                        </div>
                    </div>
                    <div className='right-nav'>
                        <div className='icon-container'><a className='link-icon' href='https://github.com/kevinismcao'><SiGithub id='github-icon'/></a></div>
                        <div className='icon-container'><a className='link-icon' href='https://www.linkedin.com/in/ningxiao-cao/'><FaLinkedinIn id='linkedin-icon'/></a></div>
                        <div className='icon-container'>
                            <NavLink to={`/users/${sessionUser.id}`} className='link-icon' >                               
                                {sessionUser.imageUrl ?
                                    <ProfilePicture user={sessionUser} xs={true} />
                                    : <FaUserCircle id="profile-pic-xs" />}                             
                            </NavLink>
                        </div> 
                        <ProfileButton user={sessionUser} />
                    </div>
                </ul>
            </div>
        );
    } else {
        return (
            <div className='header-nav-container'>
                <ul className='nav-bar'>
                    <div className='left-nav'>
                        <div className='nav-logo'>
                            <NavLink className='nav-logo-container'to="/">
                                <img className="logo" src={logo} />
                                <div className="logo-name">
                                    <h2 id="logo-name">interestIn</h2>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className='right-nav'>
                        <a className='text-link' href='https://github.com/kevinismcao'>Github</a>
                        <a className='text-link' href='https://www.linkedin.com/in/ningxiao-cao/'>LinkedIn</a>
                        <LoginSignupModal/>
                    </div>
                </ul>
            </div>
        );
    }
    
}

export default Navigation;