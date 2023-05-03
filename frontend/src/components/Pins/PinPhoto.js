import { useMemo, useState } from 'react'
import UserPreviewContainer from '../Users/UserPreview'
import './PinPhoto.css'
import { Link } from 'react-router-dom'
import { MAX_BOARD_CHAR } from '../../util/constants_util'
import { abbreviate } from '../../util/function_util'
import SavePinButton from '../Button/SavePinButton'
import AddPinDropdown from './AddPinDropDown'




const PinPhotoContainer = ({ pin, uploader, lastPin =false, boardPins, userBoards,currentUser, boards}) => {
    const selection = userBoards[0]
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    
    const [currentSelection, setCurrentSelection] = useState(selection)
    const updateCurrentSelection = (selection) => {
        setCurrentSelection(selection);
        setOpen(false);
    }

    
    const currentBoardPins = useMemo(() => {
       const selectedBoardPins = boardPins.filter((boardPin)=>boardPin.boardId === currentSelection.id)
    //    console.log(boardPins, currentSelection.id, "sbp")
        return Object.fromEntries(selectedBoardPins.map((boardPin)=>[boardPin.pinId, boardPin.id]))
    },[boardPins, currentSelection])

    
    const handleDropdownClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return(
        <div className="pin-photo-container">
            <div className='pin-photo-box'>
                <div className="pin-photo">
                    <img src={pin?.imageUrl}></img>
                    <div className={`pin-item-hover`}>
                        {/* <div onClick={handleEditClick} className={`pin-edit-button ${showUser || !isUser ? "hide" : ""}`}>
                            <EditBoardButton />
                        </div> */}
                        <div className={`pin-item-hover-board-name`}>
                            <div className={`pin-dropdown-trigger-show`} onClick={handleClick}>
                                <h1>{abbreviate(currentSelection?.name ?? "Profile", MAX_BOARD_CHAR)}</h1>
                                <i className='fa-solid fa-chevron-down fa-xs' id="dropdown-button"></i>
                            </div>
                            <SavePinButton boardId={currentSelection?.id} pinId={pin.id} boardPins={boardPins} currentBoardPins = {currentBoardPins} board={currentSelection} className="save-button"/>
                            {/* <button className="save-button">Save</button> */}
                        </div>
                        <Link to={`/pins/${pin.id}`} className="pin-show-link">
                            <div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
               <div 
                    className={`pin-add-menu ${open ? "open" : "closed"} ${lastPin ? "last-pin" : ""}`}
                >
                    <AddPinDropdown setOpen={setOpen} pin={pin} userBoards={userBoards} currentUser={currentUser} updateCurrentSelection={updateCurrentSelection} />
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