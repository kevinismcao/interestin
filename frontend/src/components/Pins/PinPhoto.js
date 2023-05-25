import { useMemo, useRef, useState } from 'react'
import UserPreviewContainer from '../Users/UserPreview'
import './PinPhoto.css'
import { Link } from 'react-router-dom'
import { MAX_BOARD_CHAR } from '../../util/constants_util'
import { abbreviate } from '../../util/function_util'
import SavePinButton from '../Button/SavePinButton'
import AddPinDropdown from './AddPinDropDown'
import { CloseDropdown } from '../dropdown/CloseDropdown'
import PinEditForm from './PinEditForm'






const PinPhotoContainer = ({ pin, uploader, lastPin =false, boardPins, userBoards,currentUser, currentBoard, boards}) => {
    const selection = currentBoard ||= userBoards[0]
    const openRef = useRef(null)
    const isUser = (pin.uploader.id === currentUser.id)
    const [currentSelection, setCurrentSelection] = useState(selection)
    const [open, setOpen] = CloseDropdown(openRef, false) 
    const [showMenu, setShowMenu] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const updateCurrentSelection = (selection) => {
        setCurrentSelection(selection);
        setOpen(false);
    }
    
    const handleClick = () => setOpen(!open)
    
    const currentBoardPins = useMemo(() => {
       const selectedBoardPins = boardPins.filter((boardPin)=>boardPin.boardId === currentSelection?.id )
    //    console.log(boardPins, currentSelection.id, "sbp")
        return Object.fromEntries(selectedBoardPins.map((boardPin)=>[boardPin.pinId, boardPin.id]))
    },[boardPins, currentSelection])
    console.log(boardPins, "BP")
    console.log(currentBoardPins,"cbp")
    console.log(userBoards, "ub")
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleDropdownClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    
    return(
        <div className="pin-photo-container">
            {showEditModal &&
                <PinEditForm closeModal={() => setShowEditModal(false)} userBoards={userBoards} pin={pin} />
            }
            <div className='pin-photo-box'>
                <div className="pin-photo">
                    <img src={pin?.imageUrl}></img>
                    
                </div>
                <div className={`pin-item-hover`}>
                    
                    <div className={`pin-item-hover-board-name`}>
                        <div className={`pin-dropdown-trigger-show`} onClick={handleClick} ref={openRef}>
                            <h1>{abbreviate(currentSelection?.name ?? "Profile", MAX_BOARD_CHAR)}</h1>
                            <i className='fa-solid fa-chevron-down fa-xs' id="dropdown-button"></i>
                        </div>
                        <SavePinButton boardId={currentSelection?.id} pinId={pin.id} boardPins={boardPins} currentBoardPins = {currentBoardPins} board={currentSelection} className="save-button"/>
                        {/* <button className="save-button">Save</button> */}
                    </div>
                    <div onClick={() => { setShowEditModal(!showEditModal); handleScroll() }} className={isUser ? `preview-pin-edit` : 'preview-board-edit-hide'}>
                        <div className={`edit-board-button`}>
                            <i className="fa-solid fa-xs fa-pen"></i>
                        </div> 
                    </div>
                    <Link to={`/pins/${pin.id}`} className="pin-show-link">
                        <div>
                        </div>
                    </Link>
                    
                </div>
                <div onClick={handleDropdownClick} 
                    className={`pin-add-menu ${open ? "open" : "closed"} ${lastPin ? "last-pin" : ""}`}
                >
                    <AddPinDropdown setOpen={setOpen} pin={pin} userBoards={userBoards} boardPins={boardPins} currentUser={currentUser} updateCurrentSelection={updateCurrentSelection}  />
                </div>
                <div className={`pin-item-info`}>
                    <div className='pin-item-container'>
                    <div className='pin-item-title'>
                        {pin.title}
                    </div>
                    <div className='pin-item-user'>
                        <UserPreviewContainer user={pin.uploader} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PinPhotoContainer