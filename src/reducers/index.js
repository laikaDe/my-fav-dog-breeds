//This is where I will set all the reducers and set it into one parent component 
//This makes it more organized
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    dogbreeds: searchReducer
})
