import axios from "axios";
import Likes from './Likes';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/likes";

function getAPIData() {
    return axios.get(API_URL).then((response) => console.log(response.data)); 
};

function LikesContainer() {
    const [likes, setLikes] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        getAPIData().then((likes) => {
            if (mounted) {
                setLikes(likes);
            }
        });
        return () => (mounted = false);
    }, []);
    
    return (
        <div className="LikesContainer">
            <h1>Likes</h1>
            <Likes likes={likes}/>
        </div>
    )
}

export default LikesContainer