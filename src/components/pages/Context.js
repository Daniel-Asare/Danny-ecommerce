import React,{ useContext } from 'react'
import { product } from 'components/data'


const AppContext = React.createContext()


const AppProvider = ({children}) => {
  
  return (
    <AppContext.Provider value={{product}}>
      {children}
    </AppContext.Provider>
  )
  }

  export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  export  {AppProvider, AppContext}

