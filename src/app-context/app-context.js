import { createContext } from 'react'

const AppContext = createContext({
    authorities: [],
    username: '',
    dataStore: [],
    programs: [],
})

export { AppContext }
