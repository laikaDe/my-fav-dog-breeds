import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDogBreed} from '../../actions/searchActions';
import LikesContainer from "../layout/LikesContainer";


export class DogBreed extends Component {

    componentDidMount() {
        this.props.fetchDogBreed(this.props.match.params.id)
    }

    render(){
      const {dogbreed} = this.props;
      let dogBreedInfo = (
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body"><img src={`https://cdn2.thedogapi.com/images/${dogbreed.reference_image_id}.jpg`} className="thumbnail" alt="Poster" /> </div>
            <div className="col-md-8">
              <h2 className="mb-4">{dogbreed.name}</h2>
              <ul className="list-group">
                <li className="list-group-item"><LikesContainer/></li>
                <li className="list-group-item"><strong>Bred for:</strong> {dogbreed.bred_for}</li>
                <li className="list-group-item"><strong>Group:</strong> {dogbreed.breed_group}</li>
                <li className="list-group-item"><strong>Life Span:</strong> {dogbreed.life_span}</li>
                <li className="list-group-item"><strong>Temperament:</strong> {dogbreed.temperament}</li>
                <li className="list-group-item"><strong>Weight:</strong> {dogbreed.weight.imperial} pounds</li>
                <li className="list-group-item"><strong>Height:</strong> {dogbreed.height.imperial} inches</li>
              </ul>
            </div>
          </div>
        </div>
      );
      let content = dogBreedInfo;
      return <div>{content}</div>;

  }
};

const mapStateToProps = state => ({
    loading: state.dogbreeds.loading,
    dogbreed: state.dogbreeds.dogbreed
});

export default connect(mapStateToProps, {fetchDogBreed})(DogBreed);