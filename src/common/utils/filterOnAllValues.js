/** @flow */

/**
 * Search for all the object values in the list
 * @param list
 * @param query
 * @returns {Object[]}
 */
export const filterOnAllValues = (list: Array<Object>, query: string | number) => {
  // noinspection NegatedConditionalExpressionJS
  return !query
      ? list
      : list
          .filter(obj => Object
              .keys(obj)
              .some(key => obj[key].includes(query)))
}
