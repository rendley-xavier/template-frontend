/* eslint-disable no-unused-vars */
import { ExampleInterface } from '../../interfaces/ExampleInterface'

export enum ExampleActionTypes {
  ADD_EXAMPLE = 'ADD_EXAMPLE',
  DELETE_EXAMPLE = 'DELETE_EXAMPLE',
  UPDATE_EXAMPLE = 'UPDATE_EXAMPLE'
}

interface AddExampleAction {
  type: typeof ExampleActionTypes.ADD_EXAMPLE
  payload: ExampleInterface
}

interface DeleteExampleAction {
  type: typeof ExampleActionTypes.DELETE_EXAMPLE
  payload: number
}

interface UpdateExampleAction {
  type: typeof ExampleActionTypes.UPDATE_EXAMPLE
  payload: ExampleInterface
}

export type ExampleAction =
  | AddExampleAction
  | DeleteExampleAction
  | UpdateExampleAction
