// Types
import {
  HANDLE_INPUT
} from './types'

/**
 * ACTION CREATORS
 */

export const hanldeInputField = (field, value) => ({
  type:    HANDLE_INPUT,
  payload: {field, value}
})