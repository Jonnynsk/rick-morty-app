import { configureStore } from '@reduxjs/toolkit'

import episodesReducer from './reducers/episodesSlice'
import locationsReducer from './reducers/locationsSlice'
import charactersReducer from './reducers/charactersSlice'

export const store = configureStore({
  reducer: {
    episodes : episodesReducer,
    locations: locationsReducer,
    characters: charactersReducer
  },
})