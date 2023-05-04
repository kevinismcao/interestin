import React from 'react'
import MiniBoardCover from './MiniBoardCover'
import { MAX_NAME_CHAR } from '../../util/constants_util'
import { abbreviate } from '../../util/function_util'
import SavePinButton from '../Button/SavePinButton'


const MiniBoardPreview = ({board, pin, updateCurrentSelection,pins, query}) => {

    // const show = board?.name.toLowerCase().includes(query.toLowerCase()) || board === null
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     updateCurrentSelection(board)
    // }
    
    return (
        <div onClick={() => updateCurrentSelection(board)} 
        className={`mini-board-preview-container`}>
            <div className='mini-board-cover'>
                <MiniBoardCover pinId={board?.pins[0]}/>
            </div>
            <div className="mini-board-info">
                <div className='mini-board-name'>
                    <h1>{abbreviate(board?.name ?? "Profile", MAX_NAME_CHAR)}</h1>
                </div>
                {/* <div>
                    <SavePinButton boardId={board?.id} pinId={pin?.id}/>
                </div> */}
            </div>
        </div>
    )
    

}

export default MiniBoardPreview