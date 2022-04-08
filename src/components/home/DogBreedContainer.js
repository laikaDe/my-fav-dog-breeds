import React, { Component } from 'react'
import { connect } from 'react-redux';
import DogBreedCard from './DogBreedCard';
//check dogbreed state value
//if empty display nothing 
//if full map through dogbreeds to create 
//a new dogbreed object and render that data
//through presentational component 

export class DogBreedContainer extends Component {
  render() {
      //destructor dogbreeds array
      const {dogbreeds} = this.props;
      let content = '';
      //if array length is bigger than 0 the content will be equal to dogbreeds.map
      content = dogbreeds.length > 0 ? dogbreeds.map((dogbreed, index)=> <DogBreedCard key={index} dogbreed={dogbreed}/>) : null ;
      return (
      <div className="row">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    dogbreeds: state.dogbreeds.dogbreeds
})

export default connect(mapStateToProps)(DogBreedContainer);