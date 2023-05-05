import { csrfFetch } from "./csrf";

export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const RECEIVE_BOARD_PINS = 'RECEIVE_BOARD_PINS';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

const receiveBoardPins = boardPins => ({
    type: RECEIVE_BOARD_PINS,
    boardPins
});

const receiveBoardPin = boardPin=> ({
    type: RECEIVE_BOARD_PIN,
    boardPin
})

const removeBoardPin = boardPinId => ({
    type: REMOVE_BOARD_PIN,
    boardPinId
})

export const getBoardPin = boardPinId => state => {
    return state?.entities.boardPins ? state.entities.boardPins[boardPinId] : null;
}

export const getBoardPins = state => {
    return state?.entities.boardPins ? Object.values(state.entities.boardPins) : [];
}

export const fetchBoardPins = () => async(dispatch) => {
    const response = await fetch('/api/board_pins');
    if (response.ok){
        const boardPins = await response.json();
        dispatch(receiveBoardPins(boardPins))
    }
}

export const fetchBoardPin = boardPinId => async (dispatch) => {
    const response = await fetch(`/api/board_pins/${boardPinId}`);

    if (response.ok) {

        const boardPin = await response.json();
        dispatch(receiveBoardPin(boardPin));
    }
};



export const createBoardPin = (boardPin) => async(dispatch)=> {
    const response = await csrfFetch('/api/board_pins',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(boardPin)
    });
    if (response.ok){
        const boardPin = await response.json();
        dispatch(receiveBoardPin(boardPin))
        return true
    }else{
        return false
    }
};

export const deleteBoardPin = (boardPinId) => async (dispatch) => {
    const response = await csrfFetch(`/api/board_pins/${boardPinId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removeBoardPin(boardPinId))
    }
}

const boardPinsReducer = (state={},action) =>{
    switch(action.type){
        case RECEIVE_BOARD_PINS:
            return { ...action.boardPins };
        case RECEIVE_BOARD_PIN:
            return { ...state, [action.boardPin.id]: action.boardPin };
        case REMOVE_BOARD_PIN:
            const newState = {...state};
            delete newState[action.boardPinsId];
            return newState;
        default:
            return state;
    }
}

export default boardPinsReducer



