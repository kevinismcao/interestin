import React from 'react'
import ProfilePicture from './ProfilePicture'
import { Link } from 'react-router-dom'
import './UserPreview.css'
import { FaUserCircle } from 'react-icons/fa';

const UserPreviewContainer = (props) => {

    const { user} = props

    return (
        <Link to={`/users/${user?.username}/`}>
            <div className='user-preview-container'>
                { user.imageUrl ? 
                <img className='user-profile-picture-small'src={`${user.imageUrl}`}></img> :
                    <FaUserCircle className='user-profile-picture-small' />
                }
                <div className={`username`}>{user?.username}</div>
            </div>
        </Link>
    )
}

export default UserPreviewContainer