import { combineReducers } from 'redux';


import pinsReducer from './pins';
import usersReducer from './user';
import boardsReducer from './boards';
import boardPinsReducer from './boardPins';

const entitiesReducer = combineReducers({
    pins: pinsReducer,
    users: usersReducer,
    boards: boardsReducer,
    boardPins: boardPinsReducer
});

export default entitiesReducer
