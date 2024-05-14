import { ExampleInterface } from '../../interfaces/ExampleInterface'
import { ExampleActionTypes, ExampleAction } from '../types/ExampleActionTypes'

const ExampleReducer = (
  state: ExampleInterface,
  action: ExampleAction
): ExampleInterface => {
  switch (action.type) {
    case ExampleActionTypes.ADD_EXAMPLE:
      return {
        ...state,
        ...action.payload
      }
    case ExampleActionTypes.DELETE_EXAMPLE:
      return {
        ...state,
        name: ''
      }
    case ExampleActionTypes.UPDATE_EXAMPLE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default ExampleReducer
