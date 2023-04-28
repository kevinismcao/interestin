import { combineReducers } from 'redux';


import pinsReducer from './pins';
import usersReducer from './user';
import boardsReducer from './boards';

const entitiesReducer = combineReducers({
    pins: pinsReducer,
    users: usersReducer,
    boards: boardsReducer
});

export default entitiesReducer
