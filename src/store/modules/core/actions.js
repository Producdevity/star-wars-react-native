// Types
import {
  HANDLE_INPUT,
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_DONE,
  FETCH_ITEMS_FOR_CATEGORY_BEGIN,
  FETCH_ITEMS_FOR_CATEGORY_DONE
} from './types'

// Utils
import { http } from '../../../common/utils'

/**
 * ACTION CREATORS
 */

export const hanldeInput = (field, value) => ({
  type:    HANDLE_INPUT,
  payload: {field, value}
})


const fetchItemsForCategoryBegin = () => ({
  type: FETCH_ITEMS_FOR_CATEGORY_BEGIN
})

const fetchItemsForCategoryDone = payload => ({
  type: FETCH_ITEMS_FOR_CATEGORY_DONE,
  payload
})

export const fetchItemsForCategory = ({category}) => async dispatch => {
  dispatch(fetchCategoriesBegin())

  try {
    const data = await http.getByCategory(category)

    dispatch(fetchItemsForCategoryDone({category, data}))
  }
  catch (error) {
    console.error('error', error.message || error)
  }

}



const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
})

const fetchCategoriesDone = payload => ({
  type: FETCH_CATEGORIES_DONE,
  payload
})

export const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesBegin())

  try {
    const data = await http.getCategories()

    console.log({data})

    dispatch(fetchCategoriesDone({data}))
  }
  catch (error) {
    console.error('error', error.message || error)
  }

}
