import { 
    SEARCH_DOGBREED,
    FETCH_DOGBREEDS,
    FETCH_DOGBREED
 } from './types';
import axios from 'axios';
import {APIKey} from '../APIKEY';

export const searchDogBreed = text => dispatch => {
    dispatch({
        type: SEARCH_DOGBREED,
        payload: text
    });
};

export const fetchDogBreeds = text => dispatch => {
    const url = `https://api.thedogapi.com/v1/breeds/search?q=${text}`
    axios.get(url, {
        headers: {
            'x-api-key': {APIKey},
        }      
    })
    .then(response => dispatch
        ({
        type: FETCH_DOGBREEDS,
        payload: response.data
    }))
    .catch(error => console.log(error));
    
};

export const fetchDogBreed = id => dispatch => {
    const url = `https://api.thedogapi.com/v1/breeds/${id}`
    axios.get(url, {
        headers: {
            'x-api-key': {APIKey},
        }      
    })
    .then(response => dispatch
        ({
        type: FETCH_DOGBREED,
        payload: response.data
    }))
    .catch(error => console.log(error));
}
