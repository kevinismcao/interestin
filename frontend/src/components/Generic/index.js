import React from "react";
import { useSelector } from 'react-redux';
import Splash from "../SplashPage"
import HomePage from "../HomePage"
import "./index.css"

function SplashOrHome(){

    const sessionUser = useSelector(state => state.session.user);

    
    return (
        <div className="splash-home">
            {sessionUser ? <HomePage/> : <Splash/>}
        </div>
    )
}

export default SplashOrHome