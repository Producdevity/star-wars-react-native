// Types
import {
  HANDLE_INPUT,
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_DONE,
  FETCH_ITEMS_FOR_CATEGORY_BEGIN,
  FETCH_ITEMS_FOR_CATEGORY_DONE
} from './types'

// Utils
import { createReducer } from '../../helpers/createReducer'

const initialState = {
  inputs:     {
    query: null
  },
  loading:    false,
  categories: {},
  items:      {}
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
  },


  [FETCH_ITEMS_FOR_CATEGORY_BEGIN](state) {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH_ITEMS_FOR_CATEGORY_DONE](state, {payload}) {
    return {
      ...state,
      loading: false,
      items:   {
        [payload.category]: payload.data
      }
    }
  },


  [FETCH_CATEGORIES_BEGIN](state) {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH_CATEGORIES_DONE](state, {payload}) {
    return {
      ...state,
      loading:    false,
      categories: payload.data
    }
  }


})

export default coreReducer