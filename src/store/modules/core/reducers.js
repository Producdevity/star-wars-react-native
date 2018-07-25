// Types
import {
  HANDLE_INPUT
} from './types'

// Utils
import { createReducer } from '../../helpers/createReducer'

const initialState = {
  inputs: {}
}

const coreReducer = createReducer(initialState, {

  /**
   * Handle all the user input
   * @param state
   * @param payload {{field: string, value: string}}
   */
  [HANDLE_INPUT](state, {payload}) {
    return {
      ...state,
      inputs: {
        ...state.inputs,
        [payload.field]: payload.value
      }
    }
  }

})

export default coreReducer