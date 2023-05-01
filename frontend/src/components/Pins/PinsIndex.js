import PinPhotoContainer from "./PinPhoto"
import "./PinsIndex.css"

const PinsIndex = ({pins}) => {

    
    return (
        <div className="pins-index-container">
            
            {
                pins.map((pin, i)  => <PinPhotoContainer 
                                        key = {i}
                                        pin = {pin}
                                        uploader = {pin.uploader}
                />)
                
            }
        </div>
    )
}

export default PinsIndex