import { ExampleInterface } from '../../interfaces/ExampleInterface'
import { ExampleAction, ExampleActionTypes } from '../types/ExampleActionTypes'

export const addExample = (example: ExampleInterface): ExampleAction => ({
  type: ExampleActionTypes.ADD_EXAMPLE,
  payload: example
})

export const deleteExample = (id: number): ExampleAction => ({
  type: ExampleActionTypes.DELETE_EXAMPLE,
  payload: id
})

export const updateExample = (example: ExampleInterface): ExampleAction => ({
  type: ExampleActionTypes.UPDATE_EXAMPLE,
  payload: example
})
