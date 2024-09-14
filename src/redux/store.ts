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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
