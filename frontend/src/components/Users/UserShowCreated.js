import React, { useEffect, useState } from "react"
import { fetchCreatedPins, fetchPins, getPins } from "../../store/pins"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import PinsIndex from "../Pins/PinsIndex";


const UserShowCreated = (props) => {
    const {user, isUser} = props
    const {userId} = useParams(); 
    const dispatch = useDispatch();
    const pins = useSelector(getPins);
    const [render, setRender] = useState(false)
    useEffect(()=>{
        dispatch(fetchCreatedPins(userId))
        setRender(true)
    },[dispatch, userId])

    if (render){
        return(
        <div className='created-pins-container'>
            <PinsIndex pins={pins} showUser={false} isUser={isUser} />
        </div>
    )
    }else{
        return null
    }
    

}

export default UserShowCreated
