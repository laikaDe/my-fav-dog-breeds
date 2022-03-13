import React from 'react'
import DogBreedList from '../components/DogBreedList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <main>
      <SearchForm/>
      <DogBreedList/>
    </main>
  )
}
