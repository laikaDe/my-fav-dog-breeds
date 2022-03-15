import React, { Component } from 'react'
import SearchForm from './SearchForm';

export default class Landing extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Landing</h1>
          < SearchForm />
      </div>
    )
  }
}
