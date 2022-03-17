import React, { Component } from 'react'
import { connect } from 'react-redux';
import DogBreedCard from './DogBreedCard';
//check movie state value
//if empty display nothing 
//if full map through dogbreeds to create 
//a new dogbreed opbject and render that data
//through component 

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