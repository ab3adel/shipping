import {configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import profileSlicer from './features/profile'
import addressesSlicer from './features/addresses'
import {setupListeners} from '@reduxjs/toolkit/query'

export  const store =configureStore ({
    reducer: {
      profile:profileSlicer,
      addresses:addressesSlicer
  
    },
   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch