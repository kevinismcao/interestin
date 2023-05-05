import React, { useEffect, useMemo, useState } from "react"
import { fetchCreatedPins, fetchPins, getPins } from "../../store/pins"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import PinsIndex from "../Pins/PinsIndex";


const UserShowCreated = (props) => {
    const {user, isUser, userBoards} = props
    const {userId} = useParams(); 
    const dispatch = useDispatch();
    const pins = useSelector(getPins);
    const [render, setRender] = useState(false)
    const userCreatedPins = useMemo(() => pins.filter((createdPin)=> createdPin.uploader.id === parseInt(userId )),[pins, userId])
    useEffect(()=>{
        dispatch(fetchPins())
        setRender(true)
    },[dispatch])
    
    const hasNoPins = (userCreatedPins.length === 0);
    
    const noSavedPinsMessage = () => {
        return isUser
            ? "Inspire with an Idea Pin"
            : "No Idea Pins yet, but there's a ton of potential"
    }

    const noPins = () => {
        return (
            <div className="no-created-container">
                <h1>{noSavedPinsMessage()}</h1>
                <Link to="/pin-builder">
                    <div className={`idea-pin-button ${isUser ? "" : "hide"}`}>
                        <h1>Create</h1>
                    </div>
                </Link>
            </div>
        )
    }

    const createdPinsIndex = () =>{
        return(
        <div className='created-pins-container'>
            <PinsIndex pins={userCreatedPins} userBoards={userBoards} showUser={false} isUser={isUser} />
        </div>
    )
    }
    
    return hasNoPins ? noPins() : createdPinsIndex()
}

export default UserShowCreated
