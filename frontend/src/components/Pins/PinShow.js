import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchPin, getPin } from "../../store/pins"
import "./PinShow.css"




const PinShow =() =>{
    const { pinId } = useParams();
    const dispatch = useDispatch();
    const pin = useSelector(getPin(pinId))

    useEffect(()=>{
        dispatch(fetchPin(pinId));
    }, [dispatch, pinId])

    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }


    if (pin) {
        return(
            <div className="pin-content">
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
                                    //  onClick={handleDropdownClick}
                                    className={`show-pin pin-add-menu `}>
                                    {/* <AddPinDropdown pin={pin} updateCurrentSelection={updateCurrentSelection} /> */}
                                </div>
                                <div className={`pin-item-hover-interaction`}>
                                    <div className={`pin-dropdown-trigger`} >
                                        <h1>Board name</h1>
                                        {/* <h1 >{abbreviate(currentSelection?.name ?? "Profile", MAX_BOARD_CHAR)}</h1> */}
                                        <i className='fa-solid fa-chevron-down fa-xs'></i>
                                    </div>
                                    <button>Save</button>
                                    {/* <SavePinButton boardId={currentSelection?.id} pinId={pin.id} isOutside={true} /> */}
                                </div>
                            </div>
                            <div className='pin-text'>
                                <div className='pin-title'>{pin.title}</div>
                                <div className='pin-description'>{pin.description}</div>
                            </div>
                            <div className='pin-show-creator'>
                                {/* <UserPreviewContainer bold={true} user={creator} /> */}
                            </div>
                            </div>
                            <div className='pin-comments'>
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