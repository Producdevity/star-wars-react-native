/**
 * Helper function to handle reducer methods
 *
 * @param initialState
 * @param handlers
 * @returns {function(*=, *=): *}
 */
export const createReducer = (initialState, handlers) =>
    (state = initialState, action) =>
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state