import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

// Define your reducers here
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
        JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage }
}

// Create the store with preloaded state
const store = configureStore({
  reducer,
  preloadedState: initialState,
})

export default store
