import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchDogBreed, fetchDogBreeds } from '../../actions/dogActions';

export class SearchForm extends Component {
  

  onChange = e => {
    this.props.searchDogBreed(e.target.value);
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchDogBreeds(this.props.text)
  }

  render() {
    return (
      <section className='section search'>
        <form action='' className='search-form' onSubmit={this.onSubmit}>
          <div className='form-control'>
            <label htmlFor='name'> Search for your favorite dog breeds!</label>
            <input 
            type='text' 
            onChange={this.onChange}
            id='name' 
            />
          </div>
        </form>     
      </section>
    
  )
  }
}

const mapStateToProps = state => ({
  text: state.dogbreeds.text
})



export default connect(mapStateToProps, {searchDogBreed, fetchDogBreeds})(SearchForm);