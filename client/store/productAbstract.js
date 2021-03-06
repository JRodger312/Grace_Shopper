import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_INVENTORY = 'GET_INVENTORY'

/**
 * INITIAL STATE
 */
const defaultState = {
  allProducts: [],
  displayedProducts: []
}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_INVENTORY, products})

/**
 * THUNK CREATORS
 */
export const retreiveProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/productabstract')
    dispatch(getProducts(res.data))
  } catch (err) {
    console.log('hello')
  }
}

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_INVENTORY:
      return {...state, allProducts: action.products}
    default:
      return state
  }
}
