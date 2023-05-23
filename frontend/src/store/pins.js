import { shuffle } from "../util/function_util";
import { csrfFetch } from "./csrf";

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

export const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

export const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});




export const getPin = pinId => state => {
    return state?.entities.pins ? state.entities.pins[pinId] : null;
    
}

export const getPins = state => {
    return state?.entities.pins ? Object.values(state.entities.pins) : [];
}

export const getRandomPins = state => {
    return state?.entities.pins ? shuffle(Object.values(state.entities.pins)) : [];
}


export const fetchPins = () => async (dispatch) => {
    const response = await fetch('/api/pins');

    if (response.ok) {
        const pins = await response.json();
        dispatch(receivePins(pins));
    }
};

export const fetchPin = pinId => async (dispatch) => {
    const response = await fetch(`/api/pins/${pinId}`);

    if (response.ok) {
        
        const pin = await response.json();
        dispatch(receivePin(pin));
    }
};

export const fetchBoardSavedPin = boardId => async(dispatch) => {
    const response = await fetch(`/api/boards/saved/${boardId}`);
 
    if (response.ok) {
        const pins = await response.json();
        dispatch(receivePins(pins));
    }
}

export const fetchCreatedPins = (userId) => async (dispatch) => {
    const response = await fetch(`/api/pins/created/${userId}`);

    if (response.ok) {
        const pins = await response.json();
        dispatch(receivePins(pins));
    }
};

export const fetchHomepagePins = numPins => async (dispatch) => {
    const response = await fetch(`/api/pins/homepage?numPins=${numPins}`);
    if (response.ok) {
        const pins = await response.json();
        dispatch(receivePins(pins));
    }
}

export const getSearchPins = (query) => async(dispatch) => {
    const response = await fetch(`/api/pins/search?query=${query}`,{
        data: {
            query: (query)
        }
    });
    if (response.ok){
        const pins = await response.json();
        dispatch(receivePins(pins))
        return true
    }else {
        const errors = await response.json()
        return errors
    }

}

export const createPin = pin => async (dispatch) => {
    const response = await csrfFetch(`/api/pins/`, {
        method: 'POST',
        // headers: {
        //     "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        // },
        body: (pin)
    });

    if (response.ok) {
        const pin = await response.json();
        dispatch(receivePin(pin));
        return true;
    } else return false;
};

export const deletePin = pinId => async (dispatch) => {
    const response = await csrfFetch(`/api/pins/${pinId}`, {
        method: 'DELETE',
        // headers: {
        //     "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        // },
    });

    if (response.ok) {
        dispatch(removePin(pinId));
        return true;
    } else return false;
};

export const updatePin = pin => async(dispatch) =>{
    const response = await csrfFetch(`/api/pins/${pin.id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pin)
    })
    if (response.ok){
        const pin = await response.json();
        dispatch(receivePin(pin))
        return true;
    } else return false;
}



const pinsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PINS:
            return { ...action.pins };
        case RECEIVE_PIN:
            return { ...state, [action.pin.id]: action.pin };
        case REMOVE_PIN:
            const newState = { ...state };
            delete newState[action.pinId];
            return newState;
        default:
            return state;
    }
}

export default pinsReducer;