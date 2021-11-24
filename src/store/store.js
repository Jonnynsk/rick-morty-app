import { configureStore } from '@reduxjs/toolkit'

import episodesReducer from './reducers/episodesSlice'

export const store = configureStore({
  reducer: {
    episodes : episodesReducer
  },
})