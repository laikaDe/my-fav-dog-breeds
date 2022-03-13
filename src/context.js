import React, { useState, useContext, useEffect} from 'react';
// import { useCallback } from 'react';

const url = 'https://api.thedogapi.com/v1/breeds'
const AppContext = React. createContext()

const AppProvider = ({ children}) => {   
    //search term and set search term 
    //grab value from search form and add it to fetch 
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [dogbreeds, setDogBreeds] = useState([])

    const fetchDogBreeds = async () => {
        setLoading(true)
        const settings = {
            // params: {
            //     attach_breed: 10,
            //     limit: 10,
            // },
            headers: {
                'x-api-key': '1819142d-a061-405a-b75d-0412c1b8c5d6',
            }
        }
        try {
            const response = await fetch(`${url}`, settings)
            const data = await response.json()
            const {dogbreeds} = data;
            if(dogbreeds) {
                const newDogBreeds = dogbreeds.map((dog) => {
                    const {
                        idDogBreed,
                        strName,
                        strTemperament,
                        strLifeSpan,
                        strWikepediaURL,
                        strOrigin,
                        strWeight,
                        strHeight
                    } = dog
                    return {
                        id: idDogBreed,
                        name: strName,
                        temperament: strTemperament,
                        life_span: strLifeSpan,
                        wikepedia_url: strWikepediaURL,
                        origin: strOrigin,
                        weight: strWeight,
                        height: strHeight
                    }
                })
                setDogBreeds(newDogBreeds)
            }
            else {
                setDogBreeds([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchDogBreeds()
    })
    return (
        <AppContext.Provider 
        value={{
            loading,
            dogbreeds, 
            setSearchTerm,
            }}
            >
            {children}
        </AppContext.Provider>
    )
}

//be sure to use 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
