export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});



export const getPin = pinId => state => {
    return state?.entities.pins ? state.entities.pins[pinId] : null;
}

export const getPins = state => {
    return state?.entities.pins ? Object.values(state.entities.pins) : [];
}



export const fetchPins = () => async (dispatch) => {
    const response = await fetch('/api/pins');

    if (response.ok) {
        const pins = await response.json();
        dispatch(receivePins(pins));
    }
};

export const fetchPin = pinId => async (dispatch) => {
    const response = await fetch(`/api/posts/${pinId}`);

    if (response.ok) {
        const pin = await response.json();
        dispatch(receivePin(pin));
    }
};

export const fetchHomepagePins = numPins => async (dispatch) => {
    const response = await fetch(`/api/pins/homepage?numPins=${numPins}`);
    if (response.ok) {
        const pins = await response.json();
        console.log(pins, "fetched pins")
        dispatch(receivePins(pins));
    }
}

export const createPin = pin => async (dispatch) => {
    const response = await fetch(`/api/pins/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pin)
    });

    if (response.ok) {
        const pin = await response.json();
        dispatch(receivePin(pin));
    }
};

export const deletePin = pinId => async (dispatch) => {
    const response = await fetch(`/api/posts/${pinId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removePin(pinId));
    }
};

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