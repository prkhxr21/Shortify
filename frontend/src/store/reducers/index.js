import { combineReducers } from 'redux';
import userSlice from './userSlice';
import urlSlice from './urlSlice';

const reducers = combineReducers({
    user: userSlice,
    url: urlSlice,
});

export default reducers;
