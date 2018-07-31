import { combineReducers } from 'redux'
import events from './events'
import auth from './auth'
import currentEvent from './currentEvent'

export default combineReducers({
  events, auth, currentEvent
})