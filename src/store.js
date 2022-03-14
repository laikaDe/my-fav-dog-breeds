import {createStore, applyMiddleWare} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
//makes redux extension work
import rootReducer from './reducers';

const middleWare = [thunk];
const initialSatte = {};
const store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleWare(...middleware)));


export default store;
