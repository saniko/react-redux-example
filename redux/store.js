// configure function for the store.
// This is more of a store creator
import { createStore } from 'redux'
import reducer from './reducers'

export default function configureStore(initialState = { todos: []}){
  return createStore(reducer, initialState)
}
