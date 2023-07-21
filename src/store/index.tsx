import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/Cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
