import React,{ useEffect, useMemo, useState }  from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomepagePins, fetchPins, getPins, getRandomPins } from "../../store/pins"
import PinsIndex from "../Pins/PinsIndex"
import { HOMEPAGE_NUM_PINS } from "../../util/constants_util"
import "./index.css"
import { fetchAllBoards, getBoards } from "../../store/boards"

const HomePage = () => {
    const dispatch = useDispatch()
    const pins = useSelector(getRandomPins) 
    const boards = useSelector(getBoards)
    const sessionUser = useSelector(state => state.session.user)
    const homePins = pins.slice(0,30)
    useEffect(()=>{
        dispatch(fetchPins())
    },[dispatch])
    const userBoards = useMemo(() => boards.filter((board) => board.owner.id === sessionUser.id), [boards, sessionUser])
    
    
    useEffect(() => {
        dispatch(fetchAllBoards())
    }, [dispatch])


    return(
        <div className="homepage-container">
            
            <PinsIndex pins={homePins} userBoards = {userBoards}/>
            
        </div>
    )
    
}

export default HomePage