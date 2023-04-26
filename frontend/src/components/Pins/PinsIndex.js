import PinPhotoContainer from "./PinPhoto"
import "./PinsIndex.css"

const PinsIndex = ({pins}) => {
    console.log(pins)
    return (
        <div className="pins-index-container">
            
            {
                pins.map((pin, i)  => <PinPhotoContainer 
                                        key = {i}
                                        pin = {pin}
                />)
                
            }
        </div>
    )
}

export default PinsIndex