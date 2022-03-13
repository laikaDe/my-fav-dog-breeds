import React from 'react'
import DogBreed from './DogBreed'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function DogBreedList() {
    const {dogbreeds, loading} = useGlobalContext();
    if(loading) {
        return <Loading/>
    }
    if (dogbreeds.length < 1){
        return (
        <h2 className="section-title">
        No dog breeds matched your search criteria
        </h2>
        )
    }

    return (
    <div>dog breed list</div>
    )
}
