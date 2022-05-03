import React, { Component } from 'react'
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import DogBreedContainer from './DogBreedListContainer';
import Loading from '../layout/Loading';

export class Landing extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className='container'>
          < SearchForm />
          {loading ? <Loading/> : <DogBreedContainer/>}         
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.dogbreeds.loading
})

export default connect(mapStateToProps)(Landing);
