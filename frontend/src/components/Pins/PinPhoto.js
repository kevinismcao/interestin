import './PinPhoto.css'

const PinPhotoContainer = ({pin}) => {
    return(
        <div className="pin-photo-container">
            <div className="pin-photo">
                <img src={pin?.imageUrl}></img>
                <div className={`pin-item-hover`}>
                    <div className={`pin-item-hover-board-name`}>
                        <div className={`pin-dropdown-trigger`} >
                            <h1>board</h1>
                            <i className='fa-solid fa-chevron-down fa-xs'></i>
                        </div>
                        <button className="save-button">Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

export default PinPhotoContainer