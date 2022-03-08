import React, { /*useState*/ useContext /*useEffect*/} from 'react';
// import { useCallback } from 'react';

const url = 'https://dog.ceo/api/breeds/list/all'
const AppContext = React. createContext()

const AppProvider = ({ children}) => {

    return (
        <AppContext.Provider 
        value ="hello world"
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
