import { createStore, applyMiddleware, compose } from 'redux'
import {rootReducer} from './reducers/index'
import thunk from 'redux-thunk'
import initialState from './reducers/initialState'

export function configureStore(){
  return createStore(
    rootReducer, initialState, 
    compose(
      applyMiddleware(thunk)
    )    
  );
}

export const store = configureStore()