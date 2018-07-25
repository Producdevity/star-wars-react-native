import { combineReducers } from 'redux'

// Reducers
import coreReducer     from './modules/core/reducers'

// Combine all the reducers
const reducers = combineReducers({
  core:     coreReducer,
})

export default reducers