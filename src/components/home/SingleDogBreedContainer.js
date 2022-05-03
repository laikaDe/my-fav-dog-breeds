import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDogBreed} from '../../actions/dogActions';
import SingleDogBreed from './SingleDogBreed';


export class DogBreed extends Component {

    componentDidMount() {
        this.props.fetchDogBreed(this.props.match.params.id)
    }

    render(){
      const {dogbreed} = this.props;
      return <div><SingleDogBreed dogbreed={dogbreed}/></div>;

  }
};

const mapStateToProps = state => ({
    loading: state.dogbreeds.loading,
    dogbreed: state.dogbreeds.dogbreed
});

export default connect(mapStateToProps, {fetchDogBreed})(DogBreed);
