import { SEARCH_DOGBREED, FETCH_DOGBREEDS, FETCH_DOGBREED } from './types';
import axios from 'axios';
import {API_KEY} from '../APIKEY';

export const searchDogBreed = text => dispatch => {
    dispatch({
        type: SEARCH_DOGBREED,
        payload: text
    });
};

export const fetchDogBreeds = text => dispatch => {
    const url = `http://localhost:3000/search?q=${text}`
    axios.get(url, {params: {text}})
    .then(response => dispatch
        ({
        type: FETCH_DOGBREEDS,
        payload: response.data
    }))
    .catch(error => console.log(error));
    
};

export const fetchDogBreed = id => dispatch => {
    const url = `http://localhost:3000/dogbreeds/${id}`
    //asynchronous operation 
    //1. call api 
    //2. returns promise
    //3. if promise is resolved dispatches success actions
    // and the dogbreed/1 is placed in the payload
    // the reducer will catch it and return the updated state
    // if dispatch is rejected an error action is returned 
    axios.get(url, {
        headers: {
            'x-api-key': {API_KEY},
        }      
    })
    .then(response => dispatch
        ({
        type: FETCH_DOGBREED,
        payload: response.data
    }))
    .catch(error => console.log(error));
}
