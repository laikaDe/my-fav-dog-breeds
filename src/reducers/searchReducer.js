import { SEARCH_DOGBREED } from '../actions/types';

const initialState = {
    text: '',
    dogbreeds: [],
    loading: false,
    dogbreed: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_DOGBREED:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        default:
            return state
    }
}