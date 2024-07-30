import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/user/userSlice"
import tabSlice from './slices/tab/tabSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      tab: tabSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']