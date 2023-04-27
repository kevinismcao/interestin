import UserPreviewContainer from '../Users/UserPreview'
import './PinPhoto.css'
import { Link } from 'react-router-dom'


const PinPhotoContainer = ({pin}) => {
    return(
        <div className="pin-photo-container">
            <div className="pin-photo">
                <img src={pin?.imageUrl}></img>
                <div className={`pin-item-hover`}>
                    {/* <div onClick={handleEditClick} className={`pin-edit-button ${showUser || !isUser ? "hide" : ""}`}>
                        <EditBoardButton />
                    </div> */}
                    <div className={`pin-item-hover-board-name`}>
                        <div className={`pin-dropdown-trigger`} >
                            <h1>board</h1>
                            <i className='fa-solid fa-chevron-down fa-xs'></i>
                        </div>
                        <button className="save-button">Save</button>
                    </div>
                    <Link to={`/pins/${pin.id}`} className="pin-show-link">
                        <div>
                        </div>
                    </Link>
                    
                </div>
            </div>
            <div className={`pin-item-info`}>
                <div className='pin-item-title'>
                    {pin.title}
                </div>
                <div className='pin-item-user'>
                    {pin.uploader}
                    <UserPreviewContainer user={pin.uploader} />
                </div>
            </div>
        </div>
    )

}

export default PinPhotoContainer