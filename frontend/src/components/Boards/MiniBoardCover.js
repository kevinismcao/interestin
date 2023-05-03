import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPin, getPin } from '../../store/pins';

const MiniBoardCover = ({pinId, pins}) => {
    const dispatch = useDispatch();
    

    const coverPin = useSelector(getPin(pinId))
    
    // useEffect( () => {
    //     dispatch(fetchPin(pinId))
    // }, [pinId])

    return(
        <div className="mini-board-cover"> 
                <div className='mini-board div-image' style={{ backgroundImage: `url(\"${coverPin?.imageUrl}\")`}}/>
        </div>
    )

}




export default MiniBoardCover