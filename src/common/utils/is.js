import { Platform } from 'react-native'

/**
 * Object with helper methods to determine certain "things"
 */
export const is = {
  ios() {
    return Platform.OS === 'ios'
  },

  android() {
    return Platform.OS === 'android'
  }
}