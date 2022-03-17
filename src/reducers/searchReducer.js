import { SEARCH_DOGBREED, FETCH_DOGBREEDS, FETCH_DOGBREED } from '../actions/types';

const initialState = {
    text: '',
    dogbreeds: [],
    loading: false,
    dogbreed: {
        weight: {
            imperial: 0,
            metric: 0
        }
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_DOGBREED:
            return{
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_DOGBREEDS:
            return{
                ...state,
                dogbreeds: action.payload,
            };
        case FETCH_DOGBREED:
            return{
                ...state,
                dogbreed: action.payload,
            };
        default:
            return state
    };
}