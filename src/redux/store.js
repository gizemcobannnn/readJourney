import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { journeySlice } from './data/dataSlice';
import { authSlice } from './data/authSlice';
import { configureStore } from '@reduxjs/toolkit';

const journeyPersistConfig ={
    key:"journey",
    storage,
    whitelist:["journeys","filters","favorites","journey","recommendations"],
    version:1
}

const authPersistConfig ={
    key:"auth",
    storage,
    whitelist:["isAuthenticated","loggedInUser","token"],
    version:1
}

const persistedJourneyReducer = persistReducer(journeyPersistConfig, journeySlice.reducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
export const store = configureStore({
    reducer: {
        journey: persistedJourneyReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export  const persistor = persistStore(store);
