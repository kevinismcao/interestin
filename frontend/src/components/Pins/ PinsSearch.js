import { useDispatch, useSelector } from "react-redux"
import { getPins, getRandomPins, getSearchPins } from "../../store/pins"
import { fetchAllBoards, getBoards } from "../../store/boards"
import { useEffect, useMemo, useState } from "react"
import PinsIndex from "./PinsIndex"
import "./PinsSearch.css"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"


const PinsSearch = ()=>{
   
    const dispatch = useDispatch();
    const pins = useSelector(getPins);
    const boards = useSelector(getBoards);
    const sessionUser = useSelector(state => state.session.user);
    const userBoards = useMemo(() => boards.filter((board) => board.owner.id === sessionUser.id), [boards, sessionUser]);
    const {query} = useParams();
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        
        dispatch(fetchAllBoards())
        dispatch(getSearchPins(query))
            .finally(() => (setLoading(false)))
            .then((status) => status !== true ? setErrors(status) : setErrors([]))

    }, [dispatch, query])
    
    const content = () => {
        return (
            <div className="search-index-container">
                <div className="homepage-container">
                    { (errors.length !== 0) ? 
                    <ul >
                        {errors.map(error => <p className="board-modal-error-text" key={error}>{error}</p>)}
                    </ul>   : 
                        <PinsIndex pins={pins} userBoards={userBoards} />
                    }
                </div>
            </div>
        )
    }
        
    return loading ? <Loading /> : content()
}

export default PinsSearch