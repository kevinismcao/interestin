import React,{ useEffect, useState }  from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomepagePins, fetchPins, getPins } from "../../store/pins"
import PinsIndex from "../Pins/PinsIndex"
import { HOMEPAGE_NUM_PINS } from "../../util/constants_util"
import "./index.css"

const HomePage = () => {
    const dispatch = useDispatch()
    const pins = useSelector(getPins) 

    useEffect(()=>{
        dispatch(fetchHomepagePins(HOMEPAGE_NUM_PINS))
    },[dispatch])

    console.log(pins,"pins")
    return(
        <div className="homepage-container">
            
            <PinsIndex pins={pins}/>
            
        </div>
    )
    
}

export default HomePage