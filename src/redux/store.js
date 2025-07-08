import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { journeySlice } from './data/dataSlice';
import { configureStore } from '@reduxjs/toolkit';

const journeyPersistConfig ={
    key:"psychologists",
    storage,
    whitelist:["journeys","filters","favorites","journey","isLoggedIn","loggedInUser"],
    version:1
}
const persistedJourneyReducer = persistReducer(journeyPersistConfig, journeySlice.reducer);

export const store = configureStore({
    reducer: {
        journeyreducer: persistedJourneyReducer
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export  const persistor = persistStore(store);
