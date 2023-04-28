import { combineReducers } from 'redux';

// import usersReducer from './users_reducer';
// import boardsReducer from './boards_reducer'
import pinsReducer from './pins';
import usersReducer from './user';

const entitiesReducer = combineReducers({
    pins: pinsReducer,
    users: usersReducer
});

export default entitiesReducer
