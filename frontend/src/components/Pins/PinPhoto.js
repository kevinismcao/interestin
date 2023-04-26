

const PinPhotoContainer = ({pin}) => {
    return(
        <div className="pin-photo">
            <img src={pin?.imageUrl}></img>
        </div>
    )

}

export default PinPhotoContainer