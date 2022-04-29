import { SEARCH_DOGBREED, FETCH_DOGBREEDS, FETCH_DOGBREED, ADD_DOG} from './types';
import axios from 'axios';

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
    axios.get(url)
    .then(response => dispatch
        ({
        type: FETCH_DOGBREED,
        payload: response.data
    }))
    .catch(error => console.log(error));
}

export const addDog = dogObj => dispatch => {
    console.log('before fetch')
    const url = "http://localhost:3000/dogbreeds"
    axios.post(url, dogObj)
    .then(response => {dispatch
        ({
        type: ADD_DOG,
        payload: response.data
    })
    console.log('after fetch')
    }
    )
    
    .catch(error => console.log(error));   
};

