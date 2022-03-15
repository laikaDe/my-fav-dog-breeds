import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchDogBreed } from '../../actions/searchActions';

export class SearchForm extends Component {

  onChange = event => {
    //take value of input and sets the value and use it inside searchdogbreed action
    //triggers dispatch
    this.props.searchDogBreed(event.target.value);



  }
  render() {
    return (
      <section className='section search'>
        <form action='' className='search-form'>
          <div className='form-control'>
            <label htmlFor='name'> search your favorite dogbreeds!</label>
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



export default connect(mapStateToProps, {searchDogBreed})(SearchForm);