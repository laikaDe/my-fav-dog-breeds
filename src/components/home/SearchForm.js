import React, { Component } from 'react'

export default class SearchForm extends Component {
  render() {
    return (
      <section className='section search'>
        <form action='' className='search-form'>
          <div className='form-control'>
            <label htmlFor='name'> search your favorite dogbreeds!</label>
            <input 
            type='text' 
            id='name' 
            />
          </div>
        </form>
        
        
      </section>
    
  )
  }
}
