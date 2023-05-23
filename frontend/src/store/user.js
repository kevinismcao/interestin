import {csrfFetch} from "./csrf";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const getUser = userId => state => {
    return state?.entities.users ? state.entities.users[userId] : null;
}

export const getUserByUsername = username => state => {
    return state?.entities.users ? state.entities.users[username] : null;
}

export const getUsers = state => {
    return state?.entities.users ? Object.values(state.entities.users) : [];
}
export const getUserSlice = state => {
    return state?.entities.users 
}

export const fetchUsers = () => async(dispatch) => {
    const response = await fetch('/api/users');
    if (response.ok) {
        const users = await response.json();
        dispatch(receiveUsers(users));
    }
};

export const fetchUser = userId => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if (response.ok) {
        const user = await response.json();
        dispatch(receiveUser(user));
    }
}

export const fetchUserByUsername = username => async(dispatch) => {
   const response = await fetch(`/api/users/username/${username}`);
    if (response.ok) {
        const user = await response.json();
        dispatch(receiveUser(user));
    }
}

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return { ...action.users };
        case RECEIVE_USER:
            return { ...state, [action.user.id]: action.user };
        default:
            return state;
    }
}

export default usersReducer;