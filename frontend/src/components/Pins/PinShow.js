import React, { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchPin, fetchPins, getPin, getPins } from "../../store/pins"
import "./PinShow.css"
import {RiMoreFill} from 'react-icons/ri'
import PinEditForm from "./PinEditForm"
import UserPreviewContainer from "../Users/UserPreview"
import { fetchBoardPins, getBoardPins } from "../../store/boardPins"
import { getBoards } from "../../store/boards"
import { fetchBoard } from "../../store/boards"
import { fetchBoards } from "../../store/boards"
import AddPinDropdown from "./AddPinDropDown"
import { abbreviate } from "../../util/function_util"
import { MAX_BOARD_CHAR } from "../../util/constants_util"
import SavePinButton from "../Button/SavePinButton"

import { FiChevronDown } from 'react-icons/fi'


const PinShow =() =>{
    const { pinId } = useParams();
    const dispatch = useDispatch();
    const pin = useSelector(getPin(pinId))
    const pins = useSelector(getPins)
    const boardPins = useSelector(getBoardPins)
    const [showMenu, setShowMenu] = useState(false);
    const [showEditModal,setShowEditModal] = useState(false);
    const userBoards = useSelector(getBoards)
    const sessionUser = useSelector(state => state.session.user)
    const selection = userBoards[0]
   
    
    const [currentSelection, setCurrentSelection] = useState({})


    const userBoardPins = useMemo(() => boardPins.filter((boardPin) => sessionUser.boards.includes(boardPin.boardId)), [boardPins, sessionUser])
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    const lastPin=false
    const updateCurrentSelection = (selection) => {
        setCurrentSelection(selection);
        setOpen(false);
    }
    const currentBoardPins = useMemo(() => {
        const selectedBoardPins = boardPins.filter((boardPin) => boardPin.boardId === currentSelection?.id)
        //    console.log(boardPins, currentSelection.id, "sbp")
        return Object.fromEntries(selectedBoardPins.map((boardPin) => [boardPin.pinId, boardPin.id]))
    }, [boardPins, currentSelection])


    useEffect(() => {
        dispatch(fetchBoards(sessionUser.id))
        // setCurrentSelection(selection)
    }, [dispatch],sessionUser)  

    useEffect(()=>{
        dispatch(fetchPins());
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchBoardPins());
    }, [dispatch])

    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }

   

 

    let dropdownClassName;
    if (showMenu === true) {
        dropdownClassName = "menu-open";
    } else {
        dropdownClassName = "menu-close";
    }

    
    if (pin) {
        const isUploader = (pin.uploader.id === sessionUser.id)
       

        return(
            <div className="pin-content">
                {showEditModal &&
                    <PinEditForm closeModal={()=> setShowEditModal(false)} userBoards={userBoards} pin={pin}/>
                }
               
                <div onClick={handleGoBack} className="pin-close-up"></div>
                <div className="pin-show-container">
                    <div className="pin-show-box">
                        <div className="pin-image-outbox">
                            <div className='pin-show-image-container' style={{ backgroundImage: `url(\"${pin.imageUrl}\")` }}>
                            </div>
                        </div>
                        <div className="pin-show-right-container">
                            <div className="pin-show-heading">
                            <div className={`pin-options`}></div>
                            <div className="pin-interaction-bar">
                                    <div
                                        className={`pin-add-menu ${open ? "open" : "closed"} ${lastPin ? "last-pin" : ""}`}
                                    >
                                        <AddPinDropdown setOpen={setOpen} pins={pins} boardPins={boardPins} pin={pin} userBoards={userBoards} currentUser={sessionUser} updateCurrentSelection={updateCurrentSelection} />
                                    </div>

                                {/* <div
                                     onClick={handleDropdownClick}
                                    className={`show-pin pin-add-menu `}>
                                    <AddPinDropdown pin={pin} updateCurrentSelection={updateCurrentSelection} />
                                </div> */}
                                    <div className={showMenu ? "pin-create-more-option-selected" : "pin-create-more-option"} onClick={()=>setShowMenu(!showMenu)}><RiMoreFill/></div>
                                {showMenu && isUploader && <div className="edit-dropdown">
                                                <div className="dropdown-more-options">
                                            <div className="edit-pin-container" onClick={() => { setShowEditModal(!showEditModal); setShowMenu(!showMenu) }}>
                                                        <p id="dropdown-edit" >edit pin</p>
                                                    </div>
                                                </div>
                                            </div>}
                                <div className="pin-item-hover-out-box">
                                <div className={`pin-item-hover-interaction`}>
                                    <div className={`pin-dropdown-trigger-show`} onClick={handleClick} >
                                        <h1 >{abbreviate(currentSelection?.name ?? "Profile", 20)}</h1>
                                            <FiChevronDown id="dropdown-button-photo-show" />
                                    </div>
                                            <SavePinButton boardId={currentSelection?.id} pinId={pinId} boardPins={boardPins} currentBoardPins={currentBoardPins} board={currentSelection} className="save-button" />
                                </div>
                                </div>
                                
                            </div>
                            <div className='pin-text'>
                                <div className='pin-title'>{pin.title}</div>
                                <div className='pin-description'>{pin.description}</div>
                            </div>
                            <div className='pin-show-creator'>
                                <UserPreviewContainer bold={true} user={pin.uploader} />
                            </div>
                            </div> 
                            <div className='pin-comments'>
                                {/* <div className="pin-comments-box">Comments</div> */}
                                {/* {pin.comments ? <PinCommentContainer pin={pin} /> : <CreateCommentContainer pin={pin} />} */}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }else{
        return (
            null
            )
    }
 
 
}

export default PinShow 