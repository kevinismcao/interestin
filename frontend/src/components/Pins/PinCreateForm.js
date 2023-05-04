import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPin } from "../../store/pins";
import './PinCreateForm.css'
import { RiMoreFill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { Redirect, useHistory } from "react-router-dom";
import { TbCircleArrowUpFilled } from 'react-icons/tb';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import ProfilePicture from "../Users/ProfilePicture";

const PinCreateForm = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);   
    const uploader_id = sessionUser.id
    const [errors, setErrors] = useState([]);
    const [imageErrors, setImageErrors] = useState(false);
    const [pin, setPin] = useState({
        title: '',
        description: '',
        imageFile: null,
        imageUrl: null,
        uploader_id: uploader_id
    })

    // const [title, setTitle] = useState(pin.title);
    // const [description, setDescription] = useState(pin.description);
    // const [imageFile, setImageFile] = useState(pin.imageFile);
    // const [imageUrl, setImageUrl] = useState(pin.imageUrl);
    
    
    if (!sessionUser){
       return <Redirect to='/'/>
    }
    const update = (field) =>{
        return e=> setPin({
            ...pin, [field]: e.currentTarget.value
        })
    }

    // const update = (field) => {
    //     return e=> {
    //         switch(field){
    //             case 'title':
    //                 setTitle(e.currentTarget.value);
    //                 break;
    //             case 'description':
    //                 setDescription(e.currentTarget.value);
    //                 break;
    //             default:
    //                 console.error('Field name error');
    //                 break;
    //         }
    //     }
    // }

    const handlePinFile = (e) => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () =>{
            setPin(prevPin => {
                return { ...prevPin, imageFile: file }
            });
            setPin(prevPin => {
                return { ...prevPin, imageUrl: fileReader.result }
            });
            
        }
        if (file) {
            fileReader.readAsDataURL(file);
            setImageErrors(false);
        } else {
            setPin({ ...pin }, { imageFile: null });
            setPin({ ...pin }, { imageUrl: null });
        }
    }

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (!pin.imageFile) {
            setImageErrors(true);
            setErrors(["An image is required to create a pin."])
        }else{
            const formData = new FormData();
            formData.append('pin[title]', pin.title);
            formData.append('pin[description]', pin.description);
            formData.append('pin[image]', pin.imageFile);
            formData.append('pin[uploader_id]', pin.uploader_id)
            
        dispatch(createPin(formData))
            .catch (async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors(data);
                else setErrors([res.statusText])
            })
            .then((status) => status && history.push(`/users/${sessionUser.id}`))
    
        }
      
       
    }
    console.log(errors,"error")
    
    const preview = pin.imageUrl ? <img className="preview-img" src={pin.imageUrl}/> : null;

   

    return(
        <div className="main-pin-create-form-container">
            <div className="pin-create-background"></div>

            <form onSubmit={handlePinSubmit}>
                <div className="pin-create-container">
                    <div className="pin-create-top-container">
                        <div className="pin-create-header">
                            <div className="pin-create-more-option"><RiMoreFill/></div>
                            <div className="pin-header-right-container">
                                <div className="pin-header-box">
                                {/* <button className="board-select-drop-down">
                                    <div className="pin-create-board-name">placeholder</div>
                                    <div className="pin-create-icon"><IoIosArrowDown/></div>
                                </button> */}
                                <button type="submit" className={`clickable-board-create-button-create-form`}>
                                    <div>Save</div>
                                </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="pin-create-bottom-container">
                        <div className="pin-create-left-container">
                            <div className={preview ? "hide" : "pin-create-left-box"} id={imageErrors ? "pin-create-left-box-error" : "pin-create-left-box"}>
                                <div className="upload-container">
                                    <div className={preview ? "hide" : "upload-image-box"}>
                                    {preview}
                                    <div className="upload-file-input">
                                        {!pin.imageUrl &&
                                            <div>
                                                <div className='pin-create-image-upload'>
                                                    {!imageErrors ?
                                                            <TbCircleArrowUpFilled className="pin-create-icon-upload"/>
                                                        : <RiErrorWarningFill className="pin-create-icon-error"/>
                                                    }
                                                    { !imageErrors ?                                            
                                                    <div id="drag-and-drop">Drag and drop or click to upload</div>
                                                        : <div id="pin-errors">An image is required to create a pin.</div>
                                                    }
                                                    
                                                </div>
                                            </div>
                                        }
                                    </div>
                                        <div className="pin-create-recommendation">
                                            { preview ? null :
                                            <p className={imageErrors ? "error-text" : "default-tex" }>Recommendations: Use high-quality .jpg files less than 20MB</p>
                                            }
                                        </div>
                                   
                                    </div>
                                    <input
                                    className='pin-create-image-container'
                                    type="file"
                                    onChange={handlePinFile}
                                    />
                                </div>
                    
                                
                              
                            </div>
                        </div>
                        <div className="pin-create-right-container">
                            <div className="pin-create-form">
                                <div className="pin-create-title">
                                    <textarea
                                        id="pin-create-title"
                                        type="text"
                                        value={pin.title}
                                        placeholder="Add your title"
                                        onChange={update('title')}
                                    /> 
                                    <div className="seperate-line"></div>
                                </div>
                               
                                <div className='pin-create-creator'>
                                    <div className="pin-create-user-pic">
                                        { sessionUser.imageUrl ?
                                         <ProfilePicture user={sessionUser} medium={true}/>
                                        : <FaUserCircle id="profile-pic" />}
                                    
                                    </div>
                                    <div className="pin-user-info">
                                        <div id="pin-username">{sessionUser.username}</div>
                                        
                                    </div>
                                </div>
                                <div className="pin-create-description">
                                    <textarea
                                        id="pin-create-description"
                                        type="text"
                                        value={pin.description}
                                        placeholder="Tell everyone what you Pin is about"
                                        onChange={update('description')}
                                    />
                                    <div className="seperate-line"></div>
                                </div>
                                <ul >
                                    {errors.map(error => <p className="board-modal-error-text" key={error}>{error}</p>)}
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )


}

export default PinCreateForm