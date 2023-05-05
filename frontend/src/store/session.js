import { csrfFetch, storeCSRFToken } from "./csrf";



//  action

export const SET_CURRENT_USER = 'session/setCurrentUser';
export const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};



// storeCurrentUser helper function
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}


// thunk action

export const login = (user) => async dispatch => {
    const { credential, password } = user;
    let res = await csrfFetch("/api/session", {body: JSON.stringify({credential, password}),method: "POST"});
    let data = await res.json();
    console.log(data, "data")
    storeCurrentUser(data);
    dispatch(setCurrentUser(data));
    return res;
}

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch("/api/session");
    storeCSRFToken(res);
    const data = await res.json();
    
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user))

}

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    const data = await response.json();
    storeCurrentUser(data);
    dispatch(setCurrentUser(data));
    return response;
};


export const logout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return response;
};

const initialState = {
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};


export default sessionReducer;