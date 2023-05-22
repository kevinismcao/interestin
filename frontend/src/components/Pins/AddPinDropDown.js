import { useSelector } from "react-redux"
import BoardCreateForm from "../Boards/BoardCreateForm"
import { useState } from "react"
import MiniBoardPreview from "../Boards/MiniBoardPreview"
import "./AddPinDropDown.css"
import { IoMdClose } from 'react-icons/io';


const AddPinDropdown = (props) => {
   
    const {pin, userBoards, updateCurrentSelection, currentUser, pins, setOpen} = props
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false)
    
    // const [query, setQuery] = useState('')
    // const updateQuery = (query) => {
    //     setQuery(query)
    // }

    
    return (
        <div className='pin-dropdown-container'>
            {showCreateBoardModal &&
                <BoardCreateForm closeCreateBoardModal={() => setShowCreateBoardModal(false)} />
            }
            <div className='pin-dropdown-title'>
                <h1 className="pin-dropdown-title-text">Save to board</h1>
                <IoMdClose className="pin-dropdown-close" onClick={()=>setOpen(false)}/>
            </div>
            {/* <div className='pin-dropdown-search'>
                <MiniSearchBar updateQuery={updateQuery} />
            </div> */}
            <div className='pin-dropdown-boards'>
                <p>Save to boards</p>
                <div className='pin-dropdown-board-container'>
                    {/* <MiniBoardPreview updateCurrentSelection={updateCurrentSelection} board={null} currentUser={currentUser} pin={pin} /> */}
                    {userBoards.map((userBoard, i) => <MiniBoardPreview updateCurrentSelection={updateCurrentSelection} board={userBoard} key={i} currentUser={currentUser} pins={pins} pin={pin} />)}
                </div>
            </div>
            <div className='pin-dropdown-create'>
                <p>Suggestions</p>
                <div onClick={()=>{setShowCreateBoardModal(!showCreateBoardModal)}} className='pin-dropdown-create-board'>
                    <div className='pin-add-board'>
                        <i className={`fa-solid fa-plus fa-xl`}></i>
                    </div>
                    <div>
                        <h1>Create board</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddPinDropdown