import { useDispatch, useSelector } from "react-redux"
import PinPhotoContainer from "../Pins/PinPhoto"
import { fetchPins, getPins } from "../../store/pins"
import { useEffect } from "react"
import Masonry from "react-masonry-css"

export const BREAKPOINTS = {
    default: 8,
    2120: 7, 
    1860: 6,
    1600: 5,
    1340: 4,
    1080: 3,
}

const DiscoverPinsContainer = (props) => {
    const dispatch = useDispatch()
    const pins = useSelector(getPins)
    
    const splashPins = pins.slice(0, 40)
    
    useEffect(() => {

        dispatch(fetchPins())

    }, [dispatch])

    return (
        
        <div className="pins-container">
            <Masonry 
                breakpointCols={BREAKPOINTS}
                className="splash-background-grid"
                columnClassName="masonry-grid-column">
                {
                splashPins.map((pin, i) => 
                
                <div className="discover-page-photo">
                    <img src={pin?.imageUrl}></img>
                </div>
                )
                }
            </Masonry>
            
        </div>
         
        
    )


}

export default DiscoverPinsContainer


// return (
//     <div className="discover-pins-box">
//         <div className="discover-page-container">
//             <div className="pins-index-container">
//                 {
//                     splashPins.map((pin, i) =>

//                         <div className="discover-page-photo">
//                             <img src={pin?.imageUrl}></img>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>

//     </div>

// )