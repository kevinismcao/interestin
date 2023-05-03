import React from 'react'
import "./ProfilePicture.css"
const ProfilePicture = (props) => {

    const { user, big = false, medium = false, s = false, xs = false } = props
    const uploadedPhoto = () => {
        return (
            <div className="user-preview-pic">
                <div className={`div-image ${big ? "big" : medium ? "medium" : s ? "s" : xs ? "xs" : ""}`} style={{ backgroundImage: `url(\"${user?.imageUrl}\")` }} />
            </div>
        )
    }

    const photoPreview = () => {
        return (
            <div className='user-preview-pic'>
                <div className={`preview-photo ${big ? "big" : medium ? "medium" : s ? "s" : xs ? "xs" : ""}`}>
                    <h3 className={`preview-photo-letter`} id='user-initial'>{user?.username[0].toUpperCase()}</h3>
                </div>
            </div>
        )
    }

    return user?.imageUrl ? uploadedPhoto() : photoPreview();


}


export default ProfilePicture