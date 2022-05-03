import React from 'react';
import { Link } from 'react-router-dom';


const DogBreedListCard = (props) => {

    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={props.dogbreed.image_url} alt="Dog Breed Display" />
          <h5 className="text-light card-title">
            {props.dogbreed.name}
          </h5>
          <Link className="btn btn-primary" to={'/dogbreed/' + props.dogbreed.id}>
            Dog Breed Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }

export default DogBreedListCard;
