import { createSelector } from 'reselect'

// Data
import { FIELDS } from '../../../common/data'

// Utils
import { filterOnAllValues } from '../../../common/utils'

// selectors without logic
const selectedCategorySelector = state => state.core.inputs[FIELDS.selectedCategory]
const itemsSelector            = state => state.core.items
const inputQuerySelector       = state => state.core.inputs.query

// selectors with logic
const getFilterenItems = (selectedCategory: string, items: Object, query: string | number) => {
  const listForCategory = items[selectedCategory]
  return listForCategory
      ? filterOnAllValues(listForCategory.results, query)
      : []
}

// reselect function
export const getFilterenItemsState = createSelector(
    selectedCategorySelector,
    itemsSelector,
    inputQuerySelector,
    getFilterenItems
)
