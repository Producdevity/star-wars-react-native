// Types
import {
  HANDLE_INPUT
} from './types'

/**
 * ACTION CREATORS
 */

export const hanldeInput = (field, value) => ({
  type:    HANDLE_INPUT,
  payload: {field, value}
})