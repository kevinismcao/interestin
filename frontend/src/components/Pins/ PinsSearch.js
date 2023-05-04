import { useDispatch, useSelector } from "react-redux"
import { getPins, getRandomPins } from "../../store/pins"
import { fetchAllBoards, getBoards } from "../../store/boards"
import { useEffect, useMemo } from "react"
import PinsIndex from "./PinsIndex"
import "./PinsSearch.css"


const PinsSearch = ()=>{
   
    const dispatch = useDispatch()
    const pins = useSelector(getPins)
    const boards = useSelector(getBoards)
    const sessionUser = useSelector(state => state.session.user)
    const userBoards = useMemo(() => boards.filter((board) => board.owner.id === sessionUser.id), [boards, sessionUser])



    useEffect(() => {
        
        dispatch(fetchAllBoards())
    }, [dispatch])


    return (
        <div className="search-index-container">
            <div className="homepage-container">

                <PinsIndex pins={pins} userBoards={userBoards} />

            </div>
        </div>
    )

}

export default PinsSearch