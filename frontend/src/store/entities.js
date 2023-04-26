import { combineReducers } from 'redux';

// import usersReducer from './users_reducer';
// import boardsReducer from './boards_reducer'
import pinsReducer from './pins';

const entitiesReducer = combineReducers({
    pins: pinsReducer
});

export default entitiesReducer
