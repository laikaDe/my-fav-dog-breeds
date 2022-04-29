//This is where I will set all the reducers and set it into one parent component 
//This makes it more organized
import { combineReducers } from 'redux';
import dogReducer from './dogReducer';

export default combineReducers({
    dogbreeds: dogReducer
})
