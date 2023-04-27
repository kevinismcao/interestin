import React from 'react'
import ProfilePicture from './ProfilePicture'
import { Link } from 'react-router-dom'

const UserPreviewContainer = (props) => {

    const { user} = props

    return (
        <Link to={`/users/${user?.username}/`}>
            <div className='user-preview-container'>
                {/* <ProfilePicture user={user} /> */}
                <h1 className={`username`}>{user?.username}</h1>
            </div>
        </Link>
    )
}

export default UserPreviewContainer