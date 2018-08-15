import { combineReducers } from 'redux'
import events from './events'
import auth from './auth'
import currentEvent from './currentEvent'
import rsvp from './rsvp'

export const rootReducer = combineReducers({
  events, auth, currentEvent, rsvps
})