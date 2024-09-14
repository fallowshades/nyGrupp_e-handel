import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
import cartSlice from './slice/cartSlice'
import userSlice from './user_extend/userSlice'
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
    user: userSlice,
  },
})
