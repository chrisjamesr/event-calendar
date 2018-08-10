import { createStore, applyMiddleware, compose } from 'redux'
import {rootReducer} from './reducers/index'
import thunk from 'redux-thunk'
import initialState from './reducers/initialState'

export function configureStore(){
  return createStore(
    rootReducer, initialState, 
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
  );
}

export const store = configureStore()