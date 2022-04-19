import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDogBreed} from '../../actions/searchActions';


export class DogBreed extends Component {

    componentDidMount() {
        this.props.fetchDogBreed(this.props.match.params.id)
    }

    render(){
      const {dogbreed} = this.props;
      let dogBreedInfo = (
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body"><img src={dogbreed.image_url} className="thumbnail" alt="Poster" /> </div>
            <div className="col-md-8">
              <h2 className="mb-4">{dogbreed.name}</h2>
              <ul className="list-group">
                <li className="list-group-item"><strong>Bred for:</strong> {dogbreed.bred_for}</li>
                <li className="list-group-item"><strong>Group:</strong> {dogbreed.breed_group}</li>
                <li className="list-group-item"><strong>Life Span:</strong> {dogbreed.life_span}</li>
                <li className="list-group-item"><strong>Temperament:</strong> {dogbreed.temperament}</li>
                <li className="list-group-item"><strong>Weight:</strong> {dogbreed.weight} pounds</li>
                <li className="list-group-item"><strong>Height:</strong> {dogbreed.height} inches</li>
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
//mapStateToProps function takes the state of the store and returns the object(the part of the store we're interested in)
//wrapped in parantheses() to define it as an object vs. a block of code{}
//the properties are 
//loading:
//and 
//dogbreed:
//the properties of this objects will end up as props of the DogBreed component

//connect() takes two arguments
//1. Argument one specifies what part of the store this funtion is interested in 
//-> this component is interested in state.entities.dogbreeds.list && state.entities.loading.list
//-> I want to get this object and pass it as a prop to Dogbreed component
//2. Argument two is the dispatching action
//this creates a component under the hood that will wrap the component and take care of 
//subscribing and unsubscribing from the store
export default connect(mapStateToProps, {fetchDogBreed})(DogBreed);
//the DogBreed component passed to connect is a presentational(or dummy) component
//becuase it only knows how to present data 
//vs.
//the component that is returned via the connect expression is a called a container component


//Container component -wraps presentation component 
//   Presentation (Dogbreed)