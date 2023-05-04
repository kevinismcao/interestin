import React, { useEffect, useMemo, useState } from "react"
import { fetchCreatedPins, fetchPins, getPins } from "../../store/pins"
import { useParams } from "react-router-dom"
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
    
    if (userCreatedPins){
        return(
        <div className='created-pins-container'>
            <PinsIndex pins={userCreatedPins} userBoards={userBoards} showUser={false} isUser={isUser} />
        </div>
    )
    }else{
        return null
    }
    

}

export default UserShowCreated
