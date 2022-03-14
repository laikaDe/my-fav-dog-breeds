import React from 'react';
import { Link } from 'react-router-dom';

const DogBreed = ({id, name, temperament, life_span, wikepedia_url, origin, weight, height}) => {
    return (
        <article className='dogbreed'>
            <h2> dog breed component </h2>
            <div className='img-container'>
                <img src={wikepedia_url} alt={name}/>         
            </div>
            <div className='dogbreed-footer'>
                <h3>{name}</h3>    
                <h4>{life_span}</h4>
                <p>{temperament}</p>      
                <h4>{origin}</h4>    
                <h4>{weight}</h4>
                <h4>{height}</h4>
                <Link to={`/dogbreed/${id}`} className='btn btn-primary btn-details'>
                    details 
                </Link>
            </div>
        </article>
    )
}

export default DogBreed;