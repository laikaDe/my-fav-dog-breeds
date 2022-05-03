import { SEARCH_DOGBREED, ADD_DOG, FETCH_DOGBREEDS, FETCH_DOGBREED} from '../actions/types';

//reducers always need an initial state
//added weight and height objects since the api call returns nested weight and height objects
const initialState = {
    text: '',
    dogbreeds: [],
    loading: false,
    dogbreed: {
    }     
};

export default function dogReducer(state = initialState, action) {
    switch(action.type) {
        //switch does something based on action.type
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
        case ADD_DOG:
            const dogbreeds = state.dogbreeds.concat(action.payload);
            return {...state, dogbreeds};

        default:
            return state;
        //returns default state if it doesn't have to perform any actions
    };
}