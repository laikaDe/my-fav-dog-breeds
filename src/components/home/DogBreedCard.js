import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class DogBreedCard extends Component {
  render() {
    const { dogbreed } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={`https://cdn2.thedogapi.com/images/${dogbreed.reference_image_id}.jpg`} alt="Dog Breed Display" />
          <h5 className="text-light card-title">
            {dogbreed.name}
          </h5>
          <Link className="btn btn-primary" to={'/dogbreed/' + dogbreed.id}>
            Dog Breed Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default DogBreedCard;
