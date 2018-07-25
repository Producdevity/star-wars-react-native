/** @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware                           from 'redux-thunk'
import { createLogger }                          from 'redux-logger'
import reducers                                  from './reducers'


// Only log in dev environmont
const loggerMiddleware = createLogger({predicate: () => __DEV__})

/**
 * Helper function to configure our store with
 * the given initialState, middlewares and reducers
 *
 * @param initialState
 * @returns {Store<any> & {dispatch: any}}
 */
function configureStore(initialState: any) {
  const enhancer = compose(
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
      )
  )

  return createStore(reducers, initialState, enhancer)
}

const store = configureStore({})

export default store