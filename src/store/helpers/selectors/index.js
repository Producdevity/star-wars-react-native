import { createSelector } from 'reselect'
import { FIELDS }         from '../../../common/data'

// selector
const selectedCategorySelector = state => state.core.inputs[FIELDS.selectedCategory]
const itemsSelector            = state => state.core.items
const inputQuerySelector       = state => state.core.inputs.query


// selector
const getFilterenItems = (selectedCategory, items, query) => {
  const listForCategory = items[selectedCategory]
  return listForCategory
      ? listForCategory.results.filter(item => !item.name.includes(query))
      : []
}

// reselect function
export const getFilterenItemsState = createSelector(
    selectedCategorySelector,
    itemsSelector,
    inputQuerySelector,
    getFilterenItems
)
