import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import "./index.css";
import logo from '../../assets/image/logo.jpg';

function Navigation() {
   
    const sessionUser = useSelector(state => state.session.user) ;
    let sessionLinks;
    if (sessionUser) { 
        console.log("hello")
        console.log(sessionUser,"sessionUser")
        sessionLinks = (
        
            <ProfileButton user = {sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal/>
                <NavLink to = "/signup">Sign Up</NavLink>
            </>
        );
        }
        return (
            <ul className='nav-bar'>
                <div className='left-nav'>
                    <div className='nav-logo'>
                        <NavLink className='nav-logo-container'to="/">
                            <img className="logo" src={logo} />
                            <div className="logo-name">
                                <h1 className="name">InterestIn</h1>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='right-nav'>
                     {sessionLinks}
                </div>
            </ul>
        );
    
}

export default Navigation;