import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/productSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer
  }
})