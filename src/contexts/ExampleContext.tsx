import React, { createContext, useReducer, Dispatch } from 'react'
import { ExampleInterface } from '../interfaces/ExampleInterface'
import exampleReducer from '../store/reducers/ExampleReducer'
import { ExampleAction } from '../store/types/ExampleActionTypes'
import { ExampleInitialState } from '../store/states/ExampleInitialState'

interface ExampleContextType {
  state: ExampleInterface
  dispatch: Dispatch<ExampleAction>
}

interface ExampleProviderProps {
  children: React.ReactNode
}

const ExampleContext = createContext<ExampleContextType | undefined>(undefined)

const ExampleProvider: React.FC<ExampleProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(exampleReducer, ExampleInitialState)

  return (
    <ExampleContext.Provider value={{ state, dispatch }}>
      {children}
    </ExampleContext.Provider>
  )
}

export { ExampleProvider, ExampleContext }
