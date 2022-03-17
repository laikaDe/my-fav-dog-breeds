import React, { Component } from 'react'
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import DogBreedContainer from './DogBreedContainer';
import Loading from '../layout/Loading';
// import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className='container'>
          < SearchForm />
          {/*check dogbreed state if empty then display spinner 
          if full then display the dogbreed state container which 
          should render the dogbreed info and img*/}
          {loading ? <Loading/> : <DogBreedContainer/>}
          
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.dogbreeds.loading
})

export default connect(mapStateToProps)(Landing);
