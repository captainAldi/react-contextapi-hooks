//Impor react, use reducer, createContext
import React, { useReducer, createContext, useEffect } from 'react'
import { ContactReducer } from '../reducers/ContactReducer'

//Create context and export it
export const ContactContext = createContext()

// Create Inital State
const initialState = {
  contacts: []
}

//Create provider and export it
export const ContactContextProvider = props => {
  //using reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState, () => {
    //parameter ketiga utk set ke localstorage
    const localData = localStorage.getItem('contacts')
    return localData ? JSON.parse(localData) : this.initialState
  })

  //gunakan useEffect utk update state
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state))
  }, [state])

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  )
}


