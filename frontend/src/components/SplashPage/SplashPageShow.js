import React, { useEffect, useState } from 'react'
import SplashPhoto from './SplashPhoto'
import "./SplashPageShow.css"
import Masonry from 'react-masonry-css'

const SplashPageShow = (props) => {
    const { title, photoUrls, shouldShow, shouldLeave, handleArrow } = props
    
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prevPhoto) => prevPhoto + 1)
        }, 250);

        return () => {
            setCurrentPhoto(0);
            clearInterval(interval)
        }
    }, [shouldShow])

    return (
        <div className='splash-changing-category-container'>
            <div className={`splash-prompt-container ${shouldShow ? "show-page" : shouldLeave ? "leaving-page" : "hidden-page"}`}>
                <div className={`${title.split(" ")[0]}-words`}>
                    {title}
                </div>
            </div>

            <div className={`splash-photo-container ${shouldShow ? "show-page" : shouldLeave ? "leaving-page" : "hidden-page"}`}>
                {
                    photoUrls.map((photoUrl, i) =>
                    <SplashPhoto photoUrl={photoUrl}
                        key={i}
                        photoId={i}
                        stationaryPhoto={false}
                        showPhoto={i < currentPhoto}
                    />
                    )
                }
            </div>
            <div onClick={handleArrow} className={`${title.split(" ")[0]}-arrow first-page-arrow splash-arrow ${shouldShow ? "show-arrow" : "hidden-arrow"}`}>
                <i className="fa-solid fa-chevron-down fa-lg"></i>
            </div>
        </div>
    )
}

export default SplashPageShow